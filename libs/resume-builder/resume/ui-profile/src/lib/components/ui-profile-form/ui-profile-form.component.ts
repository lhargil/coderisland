import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeBasics } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-ui-profile-form',
  templateUrl: './ui-profile-form.component.html',
  styleUrls: ['./ui-profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiProfileFormComponent implements OnInit {
  profileForm!: FormGroup;

  get profiles(): FormArray {
    return this.profileForm.get('profiles') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(formData: ResumeBasics) {
    const profiles = !formData.profiles ? [] : formData.profiles.map(profile => this.fb.group({
        network: profile.network,
        username: profile.username,
        url: profile.url
      }));

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
