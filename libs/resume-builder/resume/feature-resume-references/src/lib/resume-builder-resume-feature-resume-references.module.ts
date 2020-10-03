import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellReferencesComponent } from './containers/shell-references/shell-references.component';
import { ReferencesComponent } from './components/references/references.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellReferencesComponent, ReferencesComponent],
  exports: [ShellReferencesComponent]
})
export class ResumeBuilderResumeFeatureResumeReferencesModule {}
