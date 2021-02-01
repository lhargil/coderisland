import { Component } from '@angular/core';

@Component({
  selector: 'omg-root',
  template: `
    <header class="flex">
      <img
        alt="Nx logo"
        width="75"
        src="https://nx.dev/assets/images/nx-logo-white.svg"
      />
      <h1>Welcome to {{ title }}!</h1>
    </header>
  `,

  styles: [],
})
export class AppComponent {
  title = 'omgimgflow';
}
