import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'coderisland-page-loader',
  templateUrl: './page-loader.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLoaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
