import { Component, Input, OnInit } from '@angular/core';
import { ResumeBasics } from '@coderisland/resume-builder/domain/interfaces';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes } from '@coderisland/ui-kit/slide-in/state';
import { ShellProfileFormComponent } from '../shell-profile-form/shell-profile-form.component';

@Component({
  selector: 'resb-shell-profile-details',
  templateUrl: './shell-profile-details.component.html',
  styleUrls: ['./shell-profile-details.component.scss']
})
export class ShellProfileDetailsComponent implements OnInit {
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

  handleSave(): (eventData: any, afterSave?: () => void) => void {
    return (x) => {
      console.log('hello world');
    };
  }
}
