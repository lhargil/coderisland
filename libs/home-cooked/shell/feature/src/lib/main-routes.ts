import { Route } from '@angular/router';
import { LayoutComponent } from '@coderisland/home-cooked/shell/ui/layout';
export const MAIN_ROUTES: Route[] = [
        {
          path: '',
          component: LayoutComponent,
          children: [
            {
              path: 'recipes',
              loadChildren: () =>
                import('@coderisland/home-cooked/recipes/shell').then((module) => module.HomeCookedRecipesShellModule),
            },
            {
              path: 'guides',
              loadChildren: () =>
                import('@coderisland/home-cooked/guides/shell').then((module) => module.HomeCookedGuidesShellModule),
            },
          ],
        },
      ];
