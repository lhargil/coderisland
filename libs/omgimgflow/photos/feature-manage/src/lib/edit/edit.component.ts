import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Photo } from '@coderisland/omgimgflow/photos/domain';

@Component({
  selector: 'coderisland-edit',
  templateUrl: './edit.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent implements OnInit {
  _photo: Photo | null = null;
  photoEditForm!: FormGroup;

  @Input()
  set photo(value: Photo | null) {
    this._photo = value;
    this.photoEditForm = this.formBuilder.group({
      photo: this.formBuilder.control(null),
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

  @Output() photoEdited = new EventEmitter<Photo>();
  @Output() fileUploaded = new EventEmitter<any>();

  get tags() {
    return this.photoEditForm?.get('tags') as FormArray;
  }

  get title() {
    return this.photoEditForm?.get('title');
  }

  constructor(private readonly formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }

  handleSubmit() {
    if (this.photoEditForm?.invalid) {
      return;
    }

    const photoEdits = this.photoEditForm?.value;
    this.photoEdited.emit(photoEdits);
  }

  handleFileUpload($event: any) {
    this.fileUploaded.emit($event);
  }

  handleAddTag() {
    this.tags.push(this.formBuilder.control(''));
  }

  handleRemoveTag(index: number) {
    this.tags.removeAt(index);
  }
}
