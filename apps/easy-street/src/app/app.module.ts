import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { UiKitPageLoaderComponentsModule } from '@coderisland/ui-kit/page-loader/components';
import { UiKitSlideInComponentsModule } from '@coderisland/ui-kit/slide-in/components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageLoaderInterceptor } from '@coderisland/ui-kit/page-loader/services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    UiKitSlideInComponentsModule,
    UiKitPageLoaderComponentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PageLoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
