import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeInterest } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-interest-form',
  templateUrl: './interest-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterestFormComponent implements OnInit {
  resumeInterestForm!: FormGroup;

  get keywords() {
    return this.resumeInterestForm.get('keywords') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(formData: ResumeInterest) {
    this.resumeInterestForm = this.fb.group({
      name: [formData.name, [Validators.required]],
      keywords: this.fb.array(!formData.keywords ? [] : formData.keywords.map(keyword => keyword))
    });

    return this.resumeInterestForm;
  }

  addKeyword() {
    this.keywords.push(this.fb.control(''));
  }

  removeKeyword(index: number) {
    this.keywords.removeAt(index);
  }
}
