import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coderisland-edit',
  templateUrl: './edit.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
