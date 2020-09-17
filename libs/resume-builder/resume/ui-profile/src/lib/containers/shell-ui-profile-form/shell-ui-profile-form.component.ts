import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'resb-shell-ui-profile-form',
  templateUrl: './shell-ui-profile-form.component.html',
  styleUrls: ['./shell-ui-profile-form.component.scss']
})
export class ShellUiProfileFormComponent implements OnInit {
  formIsValid$ = of(false);
  constructor() { }

  ngOnInit(): void {
  }

}
