import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'omgimg-configure-preview',
  templateUrl: './configure-preview.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigurePreviewComponent implements OnInit {
  private _photoPreview: { url: string} | null = null;
  public imageUrlFormControl = new FormControl({value: '', disabled: true});
  @Input()
  set photoPreview(value: { url: string} | null) {
    this._photoPreview = value;
    this.imageUrlFormControl.patchValue(value?.url);
  }

  get photoPreview() {
    return this._photoPreview;
  }

  @Output()
  imageUrlCopied = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleCopyClick() {
    this.imageUrlCopied.emit(this.imageUrlFormControl.value);
  }
}
