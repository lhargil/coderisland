import { Component, Input, OnInit } from '@angular/core';
import { ResumeBasics } from '@coderisland/resume-builder/domain/interfaces';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes } from '@coderisland/ui-kit/slide-in/state';
import { ShellProfileFormComponent } from '../shell-profile-form/shell-profile-form.component';
import { ShellSocialNetworkFormComponent } from '../shell-social-network-form/shell-social-network-form.component';

@Component({
  selector: 'resb-shell-profile',
  templateUrl: './shell-profile.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellProfileComponent implements OnInit {
  @Input() resumeBasics!: ResumeBasics;

  constructor(private slideInService: SlideInService) { }

  ngOnInit(): void {
  }

  editProfile() {
    this.slideInService.show({
      heading: 'Edit profile',
      formData: this.resumeBasics,
      modalMode: SlideInModes.Create,
      component: ShellProfileFormComponent,
      handleSave: this.handleSave(),
    });
  }

  addSocialNetwork() {
    this.slideInService.show({
      heading: 'Add social network',
      formData: {},
      modalMode: SlideInModes.Create,
      component: ShellSocialNetworkFormComponent,
      handleSave: this.handleSave()
    });
  }

  editSocialNetwork(index: number) {
    this.slideInService.show({
      heading: 'Edit social network',
      formData: !index? {} : this.resumeBasics.profiles.find((v,i) => i == index),
      modalMode: SlideInModes.Update,
      component: ShellSocialNetworkFormComponent,
      handleSave: this.handleSave()
    })
  }

  handleSave(): (eventData: any, afterSave?: () => void) => void {
    return (x) => {
      console.log('hello world');
    };
  }
}
