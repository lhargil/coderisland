import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ListFacade, Photo } from '@coderisland/omgimgflow/photos/domain';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'omgimg-shell-list',
  templateUrl: './shell-list.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ShellListComponent implements OnInit {
  searchTerm = new FormControl('');
  constructor(public readonly listFacade: ListFacade) {}

  ngOnInit(): void {
    this.listFacade.loadPhotos(this.searchTerm.valueChanges);
    this.initializeSearch(this.searchTerm);

  }

  initializeSearch(search: FormControl) {
    this.listFacade.searchTerm$
      .pipe(take(1), untilDestroyed(this))
      .subscribe((term) => search.patchValue(term, { emitEvent: false }));
  }

  handleRemoveClick(photo: Photo) {
    console.log(photo);
  }
}
