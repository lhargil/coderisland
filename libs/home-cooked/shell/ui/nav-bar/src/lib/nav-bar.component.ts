import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStore } from '@coderisland/home-cooked/shared/data-access';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'hc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  links$ = this.uiStore.navItems$;
  constructor(private readonly uiStore: UiStore) {}

  ngOnInit(): void {}
}
