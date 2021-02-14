import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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
  photos$!: Observable<any[]>;
  constructor() {}

  ngOnInit(): void {
    this.photos$ = of([
      {
        id: '08d8d088-ead4-4c28-8ebb-64e57c8b92a8',
        filename: 'light-em-up.jpg',
        title: 'Lightning over KL Skyline',
        description: 'This is a great lightning photo over Kuala Lumpur',
        tags: [],
      },
      {
        id: '08d8d088-eae0-421c-84a3-a3f8e7feef98',
        filename: 'bantayan-island.jpg',
        title: 'Bantayan Island port',
        description: 'Bantayan island port during sunset',
        tags: ['colorful'],
      },
      {
        id: '08d8d088-eae7-4411-86f2-d17298e30b42',
        filename: 'Instagram-20140928-2.jpg',
        title: 'Jump shot',
        description: 'Jump shot of a group of people',
        tags: ['tag 1', 'tag 2'],
      },
      {
        id: '08d8d089-4041-427b-82a8-734638df6dad',
        filename: 'the-walk.jpg',
        title: 'title',
        description: 'description',
        tags: ['tag 1'],
      },
    ]).pipe(
      map((photos: any[]) =>
        photos.map((photo) => {
          return {
            ...photo,
            filename: `/omgimages/${photo.filename}`,
          };
        }),
      ),
    );
  }

  handleRemoveClick(photo: any) {
    console.log(photo);
  }
}
