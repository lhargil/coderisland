import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellPageLoaderComponent } from './containers/shell-page-loader/shell-page-loader.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellPageLoaderComponent, PageLoaderComponent],
  exports: [ShellPageLoaderComponent],
})
export class UiKitPageLoaderComponentsModule {}
