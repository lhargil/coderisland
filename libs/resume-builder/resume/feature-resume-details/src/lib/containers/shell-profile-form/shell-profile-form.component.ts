import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'resb-shell-profile-form',
  templateUrl: './shell-profile-form.component.html',
  styleUrls: ['./shell-profile-form.component.scss']
})
export class ShellProfileFormComponent implements OnInit {
  formIsValid$ = of(false);
  constructor() { }

  ngOnInit(): void {
  }

}
