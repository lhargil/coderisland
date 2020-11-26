import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '@coderisland/ui-kit/page-loader/services';

@Component({
  selector: 'coderisland-shell-page-loader',
  templateUrl: './shell-page-loader.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellPageLoaderComponent implements OnInit {

  constructor(public pageLoaderService: PageLoaderService) { }

  ngOnInit(): void {
  }

}
