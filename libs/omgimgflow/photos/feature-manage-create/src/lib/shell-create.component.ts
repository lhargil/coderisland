import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditFacade } from '@coderisland/omgimgflow/photos/domain';
import { of } from 'rxjs';

@Component({
  templateUrl: './shell-create.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellCreateComponent implements OnInit {

  constructor(public readonly editFacade: EditFacade, private readonly router: Router, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editFacade.loadPhoto(of(''));
  }

  handlePhotoUpdateSubmit(photoForm: FormGroup) {
    if (photoForm.invalid) {
      return;
    }

    const photoUpdate = photoForm.value;

    this.editFacade.submitCreatedPhoto(photoUpdate);
  }

  handlePhotoUpload($event: any) {
    if ($event.target.files && $event.target.files.length) {
      this.editFacade.updateUploadedPhoto($event.target.files[0]);
    }
  }

  handleCancelClick() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute});
  }
}
