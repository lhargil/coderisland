import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coderisland-omgimgflow-feature-manage-list',
  templateUrl: './list.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
