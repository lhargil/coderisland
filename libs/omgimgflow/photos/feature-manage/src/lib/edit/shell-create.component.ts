import { Component, OnInit } from '@angular/core';
import { EditFacade, Photo } from '@coderisland/omgimgflow/photos/domain';
import { Observable } from 'rxjs';

@Component({
  template: `
    <coderisland-edit *ngIf="photo$ | async as photo" [photo]="photo" (fileUploaded)="handleFileUpload($event)" (photoEdited)="handlePhotoCreate($event)"></coderisland-edit>
  `,
  styles: [
  ]
})
export class ShellCreateComponent implements OnInit {
  uploadedFile!: File | null;
  photo$: Observable<Photo> = this.editFacade.photo$;
  constructor(private readonly editFacade: EditFacade) { }

  ngOnInit(): void {
  }

  handleFileUpload($event: any) {
    if ($event.target.files && $event.target.files.length) {
      this.uploadedFile = $event.target.files[0];
    }
  }

  handlePhotoCreate(createdPhoto: Photo) {

    this.editFacade.submitPhotoCreate({
        ...createdPhoto,
        photo: this.uploadedFile,
      });
  }
}
