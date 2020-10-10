import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeBasics } from '@coderisland/resume-builder/domain/interfaces';
@Component({
  selector: 'resb-profile-form',
  templateUrl: './profile-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(formData: ResumeBasics) {
    this.profileForm = this.fb.group({
      name: [formData.name, [Validators.required]],
      label: [formData.label, [Validators.required]],
      email: [formData.email, [Validators.required]],
      picture: [formData.picture],
      phone: [formData.phone],
      website: [formData.website],
      summary: [formData.summary],
      location: this.fb.group({
        address: [formData.location?.address],
        postalCode: [formData.location?.postalCode],
        city: [formData.location?.city],
        countryCode: [formData.location?.countryCode],
        region: [formData.location?.region]
      })
    });


    return this.profileForm;
  }
}
