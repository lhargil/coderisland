import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LayoutComponent,
          children: [
            {
              path: 'recipes',
              loadChildren: () =>
                import('@coderisland/home-cooked/recipes/shell').then((module) => module.HomeCookedRecipesShellModule),
            },
          ],
        },
      ],
      { initialNavigation: 'enabled' },
    ),
  ],
  exports: [RouterModule],
  declarations: [LayoutComponent],
})
export class HomeCookedShellModule {}
