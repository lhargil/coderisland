import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeReference } from '@coderisland/resume-builder/domain/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReferenceFormComponent } from '../../components/reference-form/reference-form.component';

@Component({
  selector: 'resb-shell-reference-form',
  templateUrl: './shell-reference-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellReferenceFormComponent implements OnInit {
  @Input() formData!: ResumeReference;
  @ViewChild(ReferenceFormComponent, { static: true }) referenceFormComponent!: ReferenceFormComponent;

  formIsValid$!: Observable<boolean>;
  private resumeReferenceForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.resumeReferenceForm = this.referenceFormComponent.createGroup(this.formData);
    this.formIsValid$ = this.resumeReferenceForm.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid')
      );
  }

}
