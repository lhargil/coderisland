import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'coderisland-configure',
  templateUrl: './configure.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigureComponent implements OnInit {
  @Input()
  imageUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
