import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EditFacade } from '@coderisland/omgimgflow/photos/domain';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './shell-edit.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellEditComponent implements OnInit {

  constructor(public readonly editFacade: EditFacade, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.editFacade.loadPhoto(this.activatedRoute.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('id') || ''))
    );
  }

  handlePhotoUpdateSubmit(photoForm: FormGroup) {
    if (photoForm.invalid) {
      return;
    }

    const photoUpdate = photoForm.value;

    this.editFacade.submitPhotoUpdate(photoUpdate);
  }

  handleCancelClick() {
    this.router.navigate(['../..'], { relativeTo: this.activatedRoute });
  }

  handlePhotoUpload($event: any) {
    if ($event.target.files && $event.target.files.length) {
      this.editFacade.updateUploadedPhoto($event.target.files[0]);
    }
  }
}
