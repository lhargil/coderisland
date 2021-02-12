import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EditFacade, Photo } from '@coderisland/omgimgflow/photos/domain';
import { map } from 'rxjs/operators';

@Component({
  template: `
    <coderisland-edit
      [photo]="photo$ | async"
      (fileUploaded)="handleFileUpload($event)"
      (photoSubmitted)="handlePhotoEdit($event)"
      (cancelClicked)="handleCancelClick()"
    ></coderisland-edit>
  `,
  styles: [],
})
export class ShellEditComponent implements OnInit {
  uploadedFile!: File | null;
  photo$ = this.editFacade.loadPhoto(
    this.activatedRoute.paramMap.pipe(
      map((paramMap: ParamMap) => {
        return paramMap.get('id') || '';
      })
    )
  );
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly editFacade: EditFacade
  ) {}

  ngOnInit(): void {}

  handleFileUpload($event: any) {
    if ($event.target.files && $event.target.files.length) {
      this.uploadedFile = $event.target.files[0];
      this.previewFiles();
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
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
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
