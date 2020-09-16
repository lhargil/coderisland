import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'coderisland-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.scss']
})
export class ComponentXComponent implements OnInit {
  formIsValid$ = of(false);
  constructor() { }

  ngOnInit(): void {
  }

}
