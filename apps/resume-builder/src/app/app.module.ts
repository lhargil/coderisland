import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UiKitSlideInComponentsModule } from '@coderisland/ui-kit/slide-in/components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'resumes',
          loadChildren: () =>
            import('@coderisland/resume-builder/resume/shell-resume').then(
              (module) => module.ResumeBuilderResumeShellResumeModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    HttpClientModule,
    UiKitSlideInComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
