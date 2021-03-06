import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { ViewComponent } from './view.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: ShellComponent }])],
  declarations: [ShellComponent, ViewComponent],
})
export class FeatureViewModule {}
