import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResumeEducation } from '@coderisland/resume-builder/domain/interfaces';
import { Observable } from 'rxjs';
import { EducationFormComponent } from '../../components/education-form/education-form.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'resb-shell-education-form',
  templateUrl: './shell-education-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellEducationFormComponent implements OnInit {
  @Input() formData!: ResumeEducation;
  @ViewChild(EducationFormComponent, { static: true }) educationFormCcomponent!: EducationFormComponent;

  formIsValid$!: Observable<boolean>;

  private resumeEducationForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.resumeEducationForm = this.educationFormCcomponent.createGroup(this.formData);
    this.formIsValid$ = this.resumeEducationForm.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid')
      );
  }

}
