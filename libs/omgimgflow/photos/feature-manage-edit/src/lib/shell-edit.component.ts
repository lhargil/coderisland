import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EditFacade } from '@coderisland/omgimgflow/photos/domain';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: './shell-edit.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellEditComponent implements OnInit {

  constructor(public readonly editFacade: EditFacade, private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editFacade.loadPhoto(this.activatedRoute.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('id') || ''))
    );
  }

}
