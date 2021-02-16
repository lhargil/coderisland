import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Photo } from '@coderisland/omgimgflow/photos/domain';

@Component({
  selector: 'omgimg-ui-edit-form',
  templateUrl: './ui-edit-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiEditFormComponent implements OnInit {
  _photo: Photo | null = null;
  photoForm!: FormGroup;

  @Input()
  set photo(value: Photo | null) {
    this._photo = value;
    this.photoForm = this.formBuilder.group({
      photoBlob: this.formBuilder.control(null, value?.id == '' ? [Validators.required]: null),
      title: [value?.title, [Validators.required]],
      description: [value?.description],
      tags: this.formBuilder.array(
        value ? value.tags.map((tag: string) =>
          this.formBuilder.control(tag, [Validators.required])
        ): []
      )
    });
  }

  get photo(): Photo | null {
    return this._photo;
  }
  @Output() photoUpdateSubmitted = new EventEmitter<FormGroup>();
  @Output() photoUploaded = new EventEmitter<any>();
  @Output() cancelClicked = new EventEmitter<void>();

  get tags() {
    return this.photoForm?.get('tags') as FormArray;
  }

  get title() {
    return this.photoForm?.get('title');
  }

  get photoBlob() {
    return this.photoForm?.get('photoBlob');
  }

  constructor(private readonly formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }


  handleSubmit() {
    this.photoUpdateSubmitted.emit(this.photoForm);
  }

  handleFileUpload($event: any) {
    this.photoUploaded.emit($event);
  }

  handleAddTag() {
    this.tags.push(this.formBuilder.control(''));
  }

  handleRemoveTag(index: number) {
    this.tags.removeAt(index);
  }

  handleCancelClick() {
    this.cancelClicked.emit();
  }

}
