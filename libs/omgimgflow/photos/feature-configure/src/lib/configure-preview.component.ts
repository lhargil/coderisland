import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'omgimg-configure-preview',
  templateUrl: './configure-preview.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigurePreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
