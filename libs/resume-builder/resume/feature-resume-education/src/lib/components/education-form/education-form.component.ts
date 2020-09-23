import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeEducation } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-education-form',
  templateUrl: './education-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationFormComponent implements OnInit {
  educationForm!: FormGroup;

  get courses() {
    return this.educationForm.get('courses') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(formData: ResumeEducation) {
    this.educationForm = this.fb.group({
      institution: [formData.institution, [Validators.required]],
      area: [formData.area, [Validators.required]],
      studyType: [formData.studyType, [Validators.required]],
      startDate: [formData.startDate, [Validators.required]],
      endDate: [formData.endDate, [Validators.required]],
      gpa: [formData.gpa, [Validators.required]],
      courses: this.fb.array(!formData.courses ? [] : formData.courses.map(course => course))
    });
    return this.educationForm;
  }

  addCourse() {
    this.courses.push(this.fb.control(''));
  }

  removeCourse(index: number) {
    this.courses.removeAt(index);
  }
}
