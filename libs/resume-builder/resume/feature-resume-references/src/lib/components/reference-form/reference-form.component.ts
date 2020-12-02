import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeReference } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-reference-form',
  templateUrl: './reference-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferenceFormComponent implements OnInit {
  referenceForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(formData: ResumeReference) {
    this.referenceForm = this.fb.group({
      name: [formData.name, [Validators.required]],
      reference: [formData.reference, [Validators.required]],
    });
    return this.referenceForm;
  }
}
