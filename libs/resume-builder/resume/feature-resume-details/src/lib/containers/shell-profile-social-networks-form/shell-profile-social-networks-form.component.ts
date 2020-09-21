import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeBasicsProfile } from '@coderisland/resume-builder/domain/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiProfileSocialNetworksFormComponent } from '@coderisland/resume-builder/resume/ui-profile'

@Component({
  selector: 'coderisland-shell-profile-social-networks-form',
  templateUrl: './shell-profile-social-networks-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellProfileSocialNetworksFormComponent implements OnInit {
  @Input() formData!: ResumeBasicsProfile;
  @ViewChild(UiProfileSocialNetworksFormComponent, {static: true}) uiProfileSocialNetworksForm: UiProfileSocialNetworksFormComponent;
  formIsValid$!: Observable<boolean>;

  private resumeProfileSocialNetworks!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.resumeProfileSocialNetworks = this.uiProfileSocialNetworksForm.createGroup(this.formData);
    this.formIsValid$ = this.resumeProfileSocialNetworks.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid'),
      );
  }

}
