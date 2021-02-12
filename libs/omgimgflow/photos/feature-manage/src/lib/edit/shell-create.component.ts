import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditFacade, Photo } from '@coderisland/omgimgflow/photos/domain';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, of } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import { EditComponent } from './edit.component';

@UntilDestroy()
@Component({
  template: `
    <coderisland-edit
      [photo]="photo$ | async"
      (photoSubmitted)="handlePhotoSubmit($event)"
      (fileUploaded)="handleFileUpload($event)"
      (cancelClicked)="handleCancelClick()"
    ></coderisland-edit>
  `,
  styles: [],
})
export class ShellCreateComponent implements OnInit {
  photo$: Observable<Photo> = this.editFacade.photo$;
  uploadedFile!: File | null;

  constructor(private readonly editFacade: EditFacade, private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.editFacade.createPhoto();
  }

  handleFileUpload($event: any) {
    if ($event.target.files && $event.target.files.length) {
      this.uploadedFile = $event.target.files[0];
    }
  }

  handlePhotoSubmit(createForm: FormGroup) {
    createForm.markAllAsTouched();
    if (createForm.invalid) {
      return;
    }

    const createdPhoto = createForm.value;

    this.editFacade.submitPhotoCreate({
      ...createdPhoto,
      photoBlob: this.uploadedFile,
    });
  }

  handleCancelClick() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute})
  }
}
