import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeBasics } from '@coderisland/resume-builder/domain/interfaces';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileFormComponent } from '../../components/profile-form/profile-form.component';

@Component({
  selector: 'resb-shell-profile-form',
  templateUrl: './shell-profile-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellProfileFormComponent implements OnInit {
  @Input() formData!: ResumeBasics;
  @ViewChild(ProfileFormComponent, { static: true }) profileForm!: ProfileFormComponent;
  formIsValid$!: Observable<boolean>;

  private resumeProfieForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.resumeProfieForm = this.profileForm.createGroup(this.formData);
    this.formIsValid$ = this.resumeProfieForm.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid'),
      );
  }
}
