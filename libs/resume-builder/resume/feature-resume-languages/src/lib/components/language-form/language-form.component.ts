import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeLanguage } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-language-form',
  templateUrl: './language-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageFormComponent implements OnInit {
  resumeLanguageForm!: FormGroup;
  fluencyLevels: { name: string; value: any }[] = [
    {
      name: 'A1',
      value: 'A1',
    },
    {
      name: 'A2',
      value: 'A2',
    },
    {
      name: 'B1',
      value: 'B1',
    },
    {
      name: 'B2',
      value: 'B2',
    },
    {
      name: 'C1',
      value: 'C1',
    },
    {
      name: 'C2',
      value: 'C2',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createGroup(formData: ResumeLanguage) {
    this.resumeLanguageForm = this.fb.group({
      language: [formData.language, [Validators.required]],
      fluency: [formData.fluency, [Validators.required]],
    });
    return this.resumeLanguageForm;
  }
}
