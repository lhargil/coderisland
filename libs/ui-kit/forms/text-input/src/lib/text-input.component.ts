import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { v4 as uuidv4 } from 'uuid';
import { TranslateService } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'coderisland-text-input',
  templateUrl: './text-input.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input('value')
  private _value!: string;
  set value(val) {
    this._value = val;
    this.onChanged(val);
  }
  get value() {
    return this._value;
  }

  @Input()
  placeholder = '';

  @Input()
  label = '';

  @Input()
  validationPrefix!: string;

  @HostBinding('class.control-invalid')
  get controlIsInvalid() {
    return this.control?.invalid && (this.control?.dirty || this.control?.touched);
  }

  @HostBinding('class.control-valid')
  get controlIsValid() {
    return this.control?.valid && this.control?.dirty;
  }

  controlUniqueId: string;
  control!: AbstractControl;
  errors$!: Observable<string[] | unknown[]>;

  private touched$ = new BehaviorSubject<any>(null);

  onChanged: any = (_: any) => { };
  onTouched: any = () => { };


  constructor(private translateService: TranslateService, public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
    this.controlUniqueId = uuidv4();
  }

  writeValue(val: any): void {
    if (val != null) {
      this.value = val;
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    if (this.controlDir.control == null) return;
    this.control = this.controlDir.control;
    this.errors$ = combineLatest([
      this.control.statusChanges.pipe(startWith(this.control.status)),
      this.control.valueChanges.pipe(startWith(this.value)),
      this.touched$.asObservable()
    ])
      .pipe(
        switchMap(_ => {
          const { errors, invalid, dirty, touched } = this.control;
          if (errors && invalid && (dirty || touched)) {
            const errorMessages: string[] = [];
            return this.translateService.get(Object.keys(errors).map(key => {
              return this.getValidationKey(key);
            }))
              .pipe(
                map((translation: any) => {
                  for (const value of Object.values(translation)) {
                    errorMessages.push(String(value));
                  }
                  return errorMessages;
                }));
          }

          return of([]);
        }),
        untilDestroyed(this)
      );

    const self = this;
    // handles off-hand markAllAstouched
    const originalMarkAsTouched = this.control.markAsTouched;
    this.control.markAsTouched = function () {
      originalMarkAsTouched.apply(this, arguments as any);
      self.touched$.next({ touched: true, untouched: false, pristine: false, dirty: true });
    }
    // handles 'off-hand' reset
    const originalMarkAsPristine = this.control.markAsPristine;
    this.control.markAsPristine = function () {
      originalMarkAsPristine.apply(this, arguments as any);
      self.touched$.next({
        dirty: false,
        pristine: true,
        touched: false,
        untouched: true
      });
    }
  }

  private getValidationKey(key: string) {
    console.log(key);
    if (this.validationPrefix) {
      return `validations.${this.validationPrefix}.${key}`;
    }
    return `validations.${this.label.toLowerCase()}.${key}`;
  }
}
