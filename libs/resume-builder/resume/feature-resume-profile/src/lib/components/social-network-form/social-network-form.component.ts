import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeBasics, ResumeBasicsProfile } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-social-network-form',
  templateUrl: './social-network-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialNetworkFormComponent implements OnInit {
  socialNetworkForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(formData: ResumeBasicsProfile) {
    this.socialNetworkForm = this.fb.group({
      network: [formData.network, [Validators.required]],
      url: [formData.url, [Validators.required]],
      username: [formData.username, [Validators.required]]
    });

    return this.socialNetworkForm;
  }

}
