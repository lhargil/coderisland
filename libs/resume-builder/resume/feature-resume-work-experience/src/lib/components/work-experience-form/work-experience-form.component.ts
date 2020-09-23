import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeWorkExperience } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-work-experience-form',
  templateUrl: './work-experience-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceFormComponent implements OnInit {
  workExperienceForm!:FormGroup;
  isVolunteerExperience = false;

  get highlights() {
    return this.workExperienceForm.get('highlights') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(formData: ResumeWorkExperience) {
    this.isVolunteerExperience = formData.organization != null;

    this.workExperienceForm = this.fb.group({
      company: [formData.company],
      position: [formData.position, [Validators.required]],
      website: [formData.website, [Validators.required]],
      startDate: [formData.startDate, [Validators.required]],
      endDate: [formData.endDate, [Validators.required]],
      summary: [formData.summary, [Validators.required]],
      highlights: this.fb.array(!formData.highlights ? [] : formData.highlights.map(highlight => highlight))
    });

    return this.workExperienceForm;
  }

  addWorkHighlight() {
    this.highlights.push(this.fb.control(''))
  }

  removeWorkHighlight(index: number) {
    this.highlights.removeAt(index);
  }
}
