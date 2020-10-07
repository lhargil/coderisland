import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellReferencesComponent } from './containers/shell-references/shell-references.component';
import { ReferencesComponent } from './components/references/references.component';
import { ShellReferenceFormComponent } from './containers/shell-reference-form/shell-reference-form.component';
import { ReferenceFormComponent } from './components/reference-form/reference-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitFormsTextInputModule } from '@coderisland/ui-kit/forms/text-input';
import { UiKitFormsTextareaModule } from '@coderisland/ui-kit/forms/textarea';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UiKitFormsTextInputModule, UiKitFormsTextareaModule],
  declarations: [ShellReferencesComponent, ReferencesComponent, ShellReferenceFormComponent, ReferenceFormComponent],
  exports: [ShellReferencesComponent, ShellReferenceFormComponent]
})
export class ResumeBuilderResumeFeatureResumeReferencesModule {}
