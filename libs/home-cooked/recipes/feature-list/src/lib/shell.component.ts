import { Component, OnInit } from '@angular/core';
import { ListFacade } from '@coderisland/home-cooked/recipes/data-access';

@Component({
  templateUrl: './shell.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellComponent implements OnInit {
  constructor(public readonly listFacade: ListFacade) { }

  ngOnInit(): void {
    this.listFacade.loadRecipes();
  }

}
