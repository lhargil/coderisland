import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { OmgimgflowPhotosShellModule } from '@coderisland/omgimgflow/photos/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    OmgimgflowPhotosShellModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
