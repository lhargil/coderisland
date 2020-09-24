import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeSkill } from '@coderisland/resume-builder/domain/interfaces';
import { Observable } from 'rxjs';
import { SkillsFormComponent } from '../../components/skills-form/skills-form.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'resb-shell-skills-form',
  templateUrl: './shell-skills-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellSkillsFormComponent implements OnInit {
  @Input() formData!: ResumeSkill;
  @ViewChild(SkillsFormComponent, { static: true }) skillsFormComponent!: SkillsFormComponent;

  formIsValid$!: Observable<boolean>;

  private resumeSkillsForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.resumeSkillsForm = this.skillsFormComponent.createGroup(this.formData);
    this.formIsValid$ = this.resumeSkillsForm.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid')
      );
  }

}
