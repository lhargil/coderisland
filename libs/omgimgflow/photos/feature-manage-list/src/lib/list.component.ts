import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '@coderisland/omgimgflow/photos/domain';

@Component({
  selector: 'omgimg-list',
  templateUrl: './list.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() photos!: Photo[] | null;
  @Output() removeClicked = new EventEmitter<Photo>();
  constructor() { }

  ngOnInit(): void {
  }

  trackByPhotoId(index: number, photo: Photo) {
    return photo.id;
  }

  trackByTag(index: number, tag: string) {
    return tag;
  }

  handleRemoveClick(photo: Photo) {
    this.removeClicked.emit(photo);
  }
}
