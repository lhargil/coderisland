import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'resb-education-form',
  templateUrl: './education-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
