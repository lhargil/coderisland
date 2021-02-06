import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '@coderisland/omgimgflow/photos/domain';

@Component({
  template: `
    <coderisland-omgimgflow-feature-manage-list *ngIf="searchResults$ | async as searchResults" [searchResults]="searchResults">
    </coderisland-omgimgflow-feature-manage-list>
    <!-- <span *ngFor="let result of searchResults$ | async">
      {{result.filename}}
    </span> -->
  `,
  styles: [
  ]
})
export class ShellListComponent implements OnInit {
  searchResults$ = this.searchFacade.searchResults$;

  constructor(private readonly searchFacade: SearchFacade) {}

  ngOnInit(): void {
    this.searchFacade.loadPhotos();
  }

}
