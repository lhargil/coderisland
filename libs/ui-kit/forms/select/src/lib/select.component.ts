import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { TranslateService } from '@ngx-translate/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'coderisland-select',
  templateUrl: './select.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input('value')
  private _value!: string;
  set value(val) {
    this._value = val;
    this.onChanged(val);
  }
  get value() {
    return this._value;
  }

  private _list!: { value: any, name: any }[];
  @Input() set items(list: { value: any, name: any }[]) {
    list.splice(0, 0, { value: null, name: this.placeholder });
    this._list = list;
  }

  get items() {
    return this._list;
  }

  @Input()
  placeholder = 'Select an item from the list';

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

  errors$!: Observable<string[]>;
  control!: AbstractControl;
  controlUniqueId: string;

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
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    if (this.controlDir.control == null) return;
    this.control = this.controlDir.control;

    this.errors$ = combineLatest([
      this.control.statusChanges.pipe(startWith(this.control.status)),
      this.control.valueChanges.pipe(startWith(this.value)),
      this.touched$.asObservable()])
      .pipe(
        switchMap(_ => {
          const { errors, invalid, dirty, touched } = this.control;
          if (errors && invalid && (dirty || touched)) {
            const errorMessages: string[] = [];
            return this.translateService.get(Object.keys(errors).map(key => {
              return this.getValidationKey(key);
            }))
              .pipe(
                map(translation => {
                  for (const value of Object.values(translation)) {
                    errorMessages.push(String(value));
                  }
                  return errorMessages;
                })
              );
          }

          return of([]);
        }),
        untilDestroyed(this)
      );

    // monkey patching solution to avoid ngDoCheck routine
    const self = this;
    // handles off-hand markAllAstouched
    const originalMarkAsTouched = this.control.markAsTouched;
    this.control.markAsTouched = function () {
      originalMarkAsTouched.apply(this, arguments as any);
      self.touched$.next({ touched: true, untouched: false });
    }

    // handles 'off-hand' reset
    const originalMarkAsPristine = this.control.markAsPristine;
    this.control.markAsPristine = function () {
      originalMarkAsPristine.apply(this, arguments as any);
      self.touched$.next({ touched: true, untouched: false });
    }
  }

  private getValidationKey(key: string) {
    if (this.validationPrefix) {
      return `${this.validationPrefix}.${key}`;
    }
    return `validations.${this.label.toLowerCase()}.${key}`;
  }
}
