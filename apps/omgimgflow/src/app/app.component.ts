import { Component } from '@angular/core';

@Component({
  selector: 'omg-root',
  template: `
    <h1>Welcome to omgimgflow!</h1>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'omgimgflow';
}
