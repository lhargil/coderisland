import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MAIN_ROUTES } from './main-routes';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      MAIN_ROUTES,
      { initialNavigation: 'enabled', scrollPositionRestoration: 'top', paramsInheritanceStrategy: 'always' },
    ),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class HomeCookedShellFeatureModule {}
