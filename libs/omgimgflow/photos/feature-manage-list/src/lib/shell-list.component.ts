import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '@coderisland/omgimgflow/photos/domain';

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
  photos$!: Observable<Photo[]>;
  constructor() {}

  ngOnInit(): void {
    this.photos$ = of([
      {
        "id": "08d8d0d2-1e8a-44bc-88cb-2ed732616255",
        "filename": "light-em-up.jpg",
        "title": "Lightning over KL Skyline",
        "description": "This is a great lightning photo over Kuala Lumpur",
        "width": 1080,
        "height": 608,
        "tags": []
      },
      {
        "id": "08d8d0d2-1e97-497c-8e51-2e20b885deb9",
        "filename": "bantayan-island.jpg",
        "title": "Bantayan Island port",
        "description": "Bantayan island port during sunset",
        "width": 720,
        "height": 1080,
        "tags": [
          "colorful"
        ]
      },
      {
        "id": "08d8d0d2-1e9e-4758-804f-12ec1d956a27",
        "filename": "Instagram-20140928-2.jpg",
        "title": "Jump shot",
        "description": "Jump shot of a group of people",
        "width": 1080,
        "height": 1080,
        "tags": [
          "tag 1",
          "tag 2"
        ]
      },
    ]).pipe(
      map((photos: Photo[]) =>
        photos.map((photo) => {
          return {
            ...photo,
            filename: `/omgimages/${photo.filename}`,
          };
        }),
      ),
    );
  }

  handleRemoveClick(photo: Photo) {
    console.log(photo);
  }
}
