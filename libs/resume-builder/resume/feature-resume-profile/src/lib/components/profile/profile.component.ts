import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResumeBasics } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-profile',
  templateUrl: './profile.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  @Input() resumeBasics!: ResumeBasics;
  @Output() editClick = new EventEmitter<void>();
  @Output() editSocialNetworkClick = new EventEmitter<number>();
  @Output() addSocialNetworkClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.editClick.emit();
  }

  editSocialNetwork(index: number) {
    this.editSocialNetworkClick.emit(index);
  }

  addSocialNetwork() {
    this.addSocialNetworkClick.emit();
  }
}
