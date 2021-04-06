import { Component, OnInit, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { DialogService } from '@ngneat/dialog';

@Component({
  selector: 'hc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  constructor(private dialog: DialogService) {}

  ngOnInit(): void {}

  open(tpl: TemplateRef<any>) {
    this.dialog.open(tpl);
  }
}
