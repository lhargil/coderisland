import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'easy-shell-transaction-form',
  templateUrl: './shell-transaction-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellTransactionFormComponent implements OnInit {
  formIsValid$!: Observable<boolean>;
  constructor() { }

  ngOnInit(): void {
    this.formIsValid$ = of(true);
  }

}
