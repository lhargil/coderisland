import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeSkill } from '@coderisland/resume-builder/domain/interfaces';
import { Observable } from 'rxjs';
import { InterestFormComponent } from '../../components/interest-form/interest-form.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'resb-shell-interest-form',
  templateUrl: './shell-interest-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellInterestFormComponent implements OnInit {
  @Input() formData!: ResumeSkill;
  @ViewChild(InterestFormComponent, { static: true }) interestFormComponent!: InterestFormComponent;
  formIsValid$!: Observable<boolean>;
  private resumeInterestForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.resumeInterestForm = this.interestFormComponent.createGroup(this.formData);
    this.formIsValid$ = this.resumeInterestForm.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid')
      );
  }

}
