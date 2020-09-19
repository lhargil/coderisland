import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'resb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-builder';

  searchForm = new FormGroup({});
}
