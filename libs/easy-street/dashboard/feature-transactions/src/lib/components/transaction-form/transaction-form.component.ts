import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'easy-transaction-form',
  templateUrl: './transaction-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
