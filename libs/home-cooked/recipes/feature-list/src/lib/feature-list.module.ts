import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { ListComponent } from './list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: ShellComponent }])],
  declarations: [ShellComponent, ListComponent],
})
export class FeatureListModule {}
