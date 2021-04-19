import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { ViewComponent } from './view.component';
import { CookGuideComponent } from './cook-guide/cook-guide.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: ShellComponent }])],
  declarations: [ShellComponent, ViewComponent, CookGuideComponent],
})
export class FeatureViewModule {}
