import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResumeBasics } from '@coderisland/resume-builder/domain/interfaces';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes } from '@coderisland/ui-kit/slide-in/state';
import { ShellUiProfileFormComponent } from '../shell-ui-profile-form/shell-ui-profile-form.component';

@Component({
  selector: 'resb-shell-ui-profile',
  templateUrl: './shell-ui-profile.component.html',
  styleUrls: ['./shell-ui-profile.component.scss']
})
export class ShellUiProfileComponent implements OnInit {
  @Input() resumeBasics!: ResumeBasics;

  constructor(private slideInService: SlideInService) { }

  ngOnInit(): void {
  }

  editProfile() {
    this.slideInService.show({
      heading: 'Edit profile',
      formData: {},
      modalMode: SlideInModes.Create,
      component: ShellUiProfileFormComponent,
      handleSave: this.handleSave(),
    });
  }

  handleSave(): (eventData: any, afterSave?: () => void) => void {
    return (x) => {
      console.log('hello world');
    };
  }
}
