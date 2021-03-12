import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@coderisland/home-cooked/shared/environments';
import { StoreRouterConnectingModule, routerReducer } from  '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
})
export class HomeCookedSharedDataAccessModule {}
