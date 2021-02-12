import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Photo, SearchFacade } from '@coderisland/omgimgflow/photos/domain';
import { take, takeUntil } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
  templateUrl: './shell-list.component.html',
  styles: [
  ]
})
export class ShellListComponent implements OnInit {
  searchTerm = new FormControl('');
  photos$ = this.searchFacade.loadPhotos(this.searchTerm.valueChanges);

  constructor(private readonly searchFacade: SearchFacade) {}

  ngOnInit(): void {
    const initialTerm$ = this.searchFacade.searchCriteria$.pipe(
      take(1)
    );
    initialTerm$.pipe(untilDestroyed(this)).subscribe(criteria => {
      this.searchTerm.patchValue(criteria.title, {emitEvent: false});
    });
  }

  handleRemoveClick(photo: Photo) {
    this.searchFacade.deletePhoto(photo);
  }
}
