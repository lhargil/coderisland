import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'coderisland-configure',
  templateUrl: './configure.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigureComponent implements OnInit {
  private _imageUrl: string = '';
  public imageUrlControl = new FormControl({value: '', disabled: true});
  @Input()
  set imageUrl(value: string) {
    this._imageUrl = value;
    this.imageUrlControl.patchValue(value);
  }

  get imageUrl() {
    return this._imageUrl;
  }

  @Output()
  imageUrlCopied = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleCopyClick() {
    this.imageUrlCopied.emit(this.imageUrlControl.value);
  }
}
