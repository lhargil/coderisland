import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListFacade, Photo } from '@coderisland/omgimgflow/photos/domain';

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
  constructor(public readonly listFacade: ListFacade) {}

  ngOnInit(): void {
    this.listFacade.loadPhotos();
  }

  handleRemoveClick(photo: Photo) {
    console.log(photo);
  }
}
