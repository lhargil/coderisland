import { Component, Input, OnInit } from '@angular/core';
import { ResumeLanguage } from '@coderisland/resume-builder/domain/interfaces';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes } from '@coderisland/ui-kit/slide-in/state';
import { ShellLanguageFormComponent } from '../shell-language-form/shell-language-form.component';

@Component({
  selector: 'resb-shell-languages',
  templateUrl: './shell-languages.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellLanguagesComponent implements OnInit {
  @Input() resumeLanguages!: ResumeLanguage[];

  constructor(private slideInService: SlideInService) { }

  ngOnInit(): void {
  }

  addLanguage() {
    this.slideInService.show({
      heading: 'Add new language',
      formData: {},
      modalMode: SlideInModes.Create,
      component: ShellLanguageFormComponent,
      handleSave: this.handleSave()
    });
  }

  editLanguage(index: number) {
    this.slideInService.show({
      heading: 'Edit language',
      formData: this.resumeLanguages.find((_, i) => i == index),
      modalMode: SlideInModes.Update,
      component: ShellLanguageFormComponent,
      handleSave: this.handleSave()
    });
  }

  handleSave(): (eventData: any, afterSave?: () => void) => void {
    return (x) => {
      console.log('hello world');
    };
  }
}
