import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellResumeDetailsComponent } from './containers/shell-resume-details/shell-resume-details.component';
import { ResumeBuilderResumeFeatureResumeWorkExperienceModule } from '@coderisland/resume-builder/resume/feature-resume-work-experience';
import { ResumeBuilderResumeFeatureResumeEducationModule } from '@coderisland/resume-builder/resume/feature-resume-education';
import { ResumeBuilderResumeFeatureResumeSkillsModule } from '@coderisland/resume-builder/resume/feature-resume-skills';
import { ResumeBuilderResumeFeatureResumeInterestsModule } from '@coderisland/resume-builder/resume/feature-resume-interests';
import { ResumeBuilderResumeFeatureResumeLanguagesModule } from '@coderisland/resume-builder/resume/feature-resume-languages';
import { ResumeBuilderResumeFeatureResumeReferencesModule } from '@coderisland/resume-builder/resume/feature-resume-references';
import { ResumeBuilderResumeFeatureResumeProfileModule } from '@coderisland/resume-builder/resume/feature-resume-profile';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ShellResumeDetailsComponent}
    ]),
    ResumeBuilderResumeFeatureResumeProfileModule,
    ResumeBuilderResumeFeatureResumeWorkExperienceModule,
    ResumeBuilderResumeFeatureResumeEducationModule,
    ResumeBuilderResumeFeatureResumeSkillsModule,
    ResumeBuilderResumeFeatureResumeInterestsModule,
    ResumeBuilderResumeFeatureResumeLanguagesModule,
    ResumeBuilderResumeFeatureResumeReferencesModule
  ],
  declarations: [ShellResumeDetailsComponent],
})
export class ResumeBuilderResumeFeatureResumeDetailsModule {}
