import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EditFacade, Photo } from '@coderisland/omgimgflow/photos/domain'
import { map } from 'rxjs/operators';

@Component({
  template: `
    <coderisland-edit [photo]="photo$ | async"
    (fileUploaded)="handleFileUpload($event)"
    (photoSubmitted)="handlePhotoEdit($event)"
    (cancelClicked)="handleCancelClick()"
    ></coderisland-edit>
  `,
  styles: [
  ]
})
export class ShellEditComponent implements OnInit {
  uploadedFile!: File | null;
  photo$ = this.editFacade.loadPhoto(this.activatedRoute.paramMap
    .pipe(
      map((paramMap: ParamMap) => {
        return paramMap.get('id') || ''
      })
    )
  )
  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute, private readonly editFacade: EditFacade) { }

  ngOnInit(): void {
  }

  handleFileUpload($event: any) {
    if ($event.target.files && $event.target.files.length) {
      this.uploadedFile = $event.target.files[0];
    }
  }

  handlePhotoEdit(editForm: FormGroup) {
    editForm.markAllAsTouched();
    if (editForm.invalid) {
      return;
    }

    const editedPhoto = editForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.editFacade.submitPhotoUpdate({
        ...editedPhoto,
        id: String(id),
        photoBlob: this.uploadedFile,
      });
  }

  handleCancelClick() {
    this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
  }
}
