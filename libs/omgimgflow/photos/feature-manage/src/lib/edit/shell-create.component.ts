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
      this.previewFiles();
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

  private previewFiles() {
    const preview = document.querySelector('#preview');

    function readAndPreview(file: File) {
      // Make sure `file.name` matches our extensions criteria
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        var reader = new FileReader();

        reader.addEventListener(
          'load',
          function () {
            var image = new Image();
            image.title = file.name;
            image.src = this.result! as string;
            preview!.textContent = '';
            preview!.appendChild(image);
          },
          false
        );

        reader.readAsDataURL(file);
      }
    }

    readAndPreview(this.uploadedFile!);
  }
}
