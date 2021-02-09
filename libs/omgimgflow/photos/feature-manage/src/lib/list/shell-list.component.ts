import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '@coderisland/omgimgflow/photos/domain';

@Component({
  template: `
    <coderisland-omgimgflow-feature-manage-list *ngIf="photos$ | async as photos" [photos]="photos">
    </coderisland-omgimgflow-feature-manage-list>
    <!-- <span *ngFor="let result of searchResults$ | async">
      {{result.filename}}
    </span> -->
  `,
  styles: [
  ]
})
export class ShellListComponent implements OnInit {
  photos$ = this.searchFacade.photos$;

  constructor(private readonly searchFacade: SearchFacade) {}

  ngOnInit(): void {
  }

}
