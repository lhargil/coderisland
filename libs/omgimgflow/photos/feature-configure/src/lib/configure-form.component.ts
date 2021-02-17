import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'omgimg-configure-form',
  templateUrl: './configure-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigureFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
