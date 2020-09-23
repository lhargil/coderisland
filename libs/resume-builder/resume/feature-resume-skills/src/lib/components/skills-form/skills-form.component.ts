import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeSkill } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-skills-form',
  templateUrl: './skills-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsFormComponent implements OnInit {
  resumeSkillForm!: FormGroup;

  get keywords() {
    return this.resumeSkillForm.get('keywords') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(formData: ResumeSkill) {
    this.resumeSkillForm = this.fb.group({
      name: [formData.name, [Validators.required]],
      level: [formData.level, [Validators.required]],
      lastUsed: [formData.lastUsed],
      keywords: this.fb.array(!formData.keywords ? [] : formData.keywords.map(keyword => keyword))
    });
    return this.resumeSkillForm;
  }

  addKeyword() {
    this.keywords.push(this.fb.control(''));
  }

  removeKeyword(index: number) {
    this.keywords.removeAt(index);
  }
}
