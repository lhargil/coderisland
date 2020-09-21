import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ResumeBasicsProfile } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-ui-profile-social-networks-form',
  templateUrl: './ui-profile-social-networks-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiProfileSocialNetworksFormComponent implements OnInit {
  profileSocialNetwork!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(formData: ResumeBasicsProfile) {
    this.profileSocialNetwork = this.fb.group({
        network: formData.network,
        username: formData.username,
        url: formData.url
      });

    return this.profileSocialNetwork;
  }

}
