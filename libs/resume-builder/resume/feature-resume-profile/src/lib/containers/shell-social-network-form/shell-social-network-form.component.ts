import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeBasicsProfile } from '@coderisland/resume-builder/domain/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocialNetworkFormComponent } from '../../components/social-network-form/social-network-form.component';

@Component({
  selector: 'resb-shell-social-network-form',
  templateUrl: './shell-social-network-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellSocialNetworkFormComponent implements OnInit {
  @Input() formData!: ResumeBasicsProfile;
  @ViewChild(SocialNetworkFormComponent, { static: true }) socialNetworkFormComponent!: SocialNetworkFormComponent;

  formIsValid$!: Observable<boolean>;

  private socialNetworkForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.socialNetworkForm = this.socialNetworkFormComponent.createGroup(this.formData);
    this.formIsValid$ = this.socialNetworkForm.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid')
      );
  }

}
