import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() photos!: any[] | null;
  @Output() removeClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  trackByPhotoId(index: number, photo: any) {
    return photo.id;
  }

  trackByTag(index: number, tag: string) {
    return tag;
  }

  handleRemoveClick(photo: any) {
    this.removeClicked.emit(photo);
  }
}
