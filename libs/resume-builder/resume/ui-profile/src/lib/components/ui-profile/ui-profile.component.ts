import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResumeBasics } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-ui-profile',
  templateUrl: './ui-profile.component.html',
  styleUrls: ['./ui-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiProfileComponent implements OnInit {
  @Input() resumeBasics!: ResumeBasics;
  @Output() editClick = new EventEmitter<void>();
  @Output() editSocialNetworkClick = new EventEmitter<number | undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.editClick.emit();
  }

  editSocialNetwork(index?: number) {
    this.editSocialNetworkClick.emit(index);
  }
}
