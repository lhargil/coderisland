import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeBasics } from '@coderisland/resume-builder/domain/interfaces';
import { Observable, of } from 'rxjs';
import { UiProfileFormComponent } from '@coderisland/resume-builder/resume/ui-profile'
import { map } from 'rxjs/operators';

@Component({
  selector: 'resb-shell-profile-form',
  templateUrl: './shell-profile-form.component.html',
  styleUrls: ['./shell-profile-form.component.scss']
})
export class ShellProfileFormComponent implements OnInit {
  @Input() formData: ResumeBasics;
  @ViewChild(UiProfileFormComponent, { static: true }) uiProfileForm: UiProfileFormComponent;
  formIsValid$: Observable<boolean>;

  private resumeProfieForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.resumeProfieForm = this.uiProfileForm.createGroup(this.formData);
    this.formIsValid$ = this.resumeProfieForm.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid'),
      );
  }
}
