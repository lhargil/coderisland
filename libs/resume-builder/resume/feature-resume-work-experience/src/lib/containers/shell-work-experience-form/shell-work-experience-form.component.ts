import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeWorkExperience } from '@coderisland/resume-builder/domain/interfaces';
import { WorkExperienceFormComponent } from '../../components/work-experience-form/work-experience-form.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'resb-shell-work-experience-form',
  templateUrl: './shell-work-experience-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellWorkExperienceFormComponent implements OnInit {
  @Input() formData!: ResumeWorkExperience;
  @ViewChild(WorkExperienceFormComponent, { static: true }) workExperienceFormComponent!: WorkExperienceFormComponent;

  formIsValid$!: Observable<boolean>;

  private resumeWorkExperienceForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.resumeWorkExperienceForm = this.workExperienceFormComponent.createGroup(this.formData);
    this.formIsValid$ = this.resumeWorkExperienceForm.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid')
      );
  }

  formSubmit(callback: (x: any) => void) {
    this.resumeWorkExperienceForm.markAllAsTouched();
    if (this.resumeWorkExperienceForm.invalid) {
      return;
    }

    callback(this.resumeWorkExperienceForm.value);
  }
}
