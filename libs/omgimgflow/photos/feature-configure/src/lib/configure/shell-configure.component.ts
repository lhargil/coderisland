import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigureFacade, ImageFlowSettings } from '@coderisland/omgimgflow/photos/domain';
import { ConfigureFormComponent } from './configure-form.component';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './shell-configure.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellConfigureComponent implements OnInit {
  @ViewChild(ConfigureFormComponent, {static: true}) configureFormComponent!: ConfigureFormComponent;
  configureForm:FormGroup|null =null;

  configuredImage$ = this.configureFacade.loadPhoto(this.activatedRoute.paramMap.pipe(map((paramMap: ParamMap) => paramMap.get('id')!)));

  constructor(public readonly configureFacade: ConfigureFacade, private readonly activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.configureFacade.imageFlowSettings$.subscribe((imageFlowSettings: ImageFlowSettings) => {
      this.configureForm = this.configureFormComponent.createForm(imageFlowSettings);
      this.configureFacade.configure(this.configureForm.valueChanges);
    });
  }

}
