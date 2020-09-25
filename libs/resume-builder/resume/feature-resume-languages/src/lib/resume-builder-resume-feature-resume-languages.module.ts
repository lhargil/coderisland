import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellLanguagesComponent } from './containers/shell-languages/shell-languages.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ShellLanguageFormComponent } from './containers/shell-language-form/shell-language-form.component';
import { LanguageFormComponent } from './components/language-form/language-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitFormsTextInputModule } from '@coderisland/ui-kit/forms/text-input';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UiKitFormsTextInputModule],
  declarations: [ShellLanguagesComponent, LanguagesComponent, ShellLanguageFormComponent, LanguageFormComponent],
  exports: [ShellLanguagesComponent, ShellLanguageFormComponent],
})
export class ResumeBuilderResumeFeatureResumeLanguagesModule {}
