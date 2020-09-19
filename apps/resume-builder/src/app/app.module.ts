import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UiKitSlideInComponentsModule } from '@coderisland/ui-kit/slide-in/components';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    UiKitSlideInComponentsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
