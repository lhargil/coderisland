import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeCookedShellFeatureModule } from '@coderisland/home-cooked/shell/feature';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeCookedShellFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
