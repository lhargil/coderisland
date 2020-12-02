import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResumeWorkExperience } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-work-experience',
  templateUrl: './work-experience.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkExperienceComponent implements OnInit {
  @Input() resumeWorkExperience!: ResumeWorkExperience[];
  @Input() options!: { isVolunteerExperience: boolean };
  @Output() addExperienceClick = new EventEmitter<void>();
  @Output() editExperienceClick = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  addExperience() {
    this.addExperienceClick.emit();
  }

  editExperience(index: number) {
    this.editExperienceClick.emit(index);
  }
}
