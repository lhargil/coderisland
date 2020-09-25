import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ResumeLanguage } from '@coderisland/resume-builder/domain/interfaces';

@Component({
  selector: 'resb-languages',
  templateUrl: './languages.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagesComponent implements OnInit {
  @Input() resumeLanguages!: ResumeLanguage[];
  @Output() addLanguageClick = new EventEmitter<void>();
  @Output() editLanguageClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addLanguage() {
    this.addLanguageClick.emit();
  }

  editLanguage(index: number) {
    this.editLanguageClick.emit(index);
  }
}
