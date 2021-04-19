import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'hc-cook-guide',
  templateUrl: './cook-guide.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookGuideComponent implements OnInit {
  step = 0;
  constructor(public ref: DialogRef<string[]>) { }

  ngOnInit(): void {

  }

  handleNext() {
    if (this.step >= this.ref.data.length - 1) {
      return;
    }

    this.step += 1;
  }

  handlePrevious() {
    if (this.step <= 0) {
      return;
    }

    this.step -= 1;
  }
}
