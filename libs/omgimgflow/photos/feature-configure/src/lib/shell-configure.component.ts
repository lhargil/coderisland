import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ConfigureFacade, ImageFlowSettings, ImageTransformModes, ImageTransformScales } from '@coderisland/omgimgflow/photos/domain';
import { map } from 'rxjs/operators';
import { ConfigureFormComponent } from './configure-form.component';
import { Clipboard } from "@angular/cdk/clipboard"

@Component({
  selector: 'omgimg-shell-configure',
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
  @ViewChild(ConfigureFormComponent, { static: true }) configureFormComponent!: ConfigureFormComponent;

  imageTransformModes = Object.values(ImageTransformModes)
  imageTransformScales = Object.values(ImageTransformScales)
  constructor(public readonly configureFacade: ConfigureFacade, private readonly activatedRoute: ActivatedRoute, private readonly clipBoard: Clipboard) { }

  ngOnInit(): void {
    this.configureFacade.loadPhotoPreview(this.activatedRoute.paramMap.pipe(map((paramMap: ParamMap) => paramMap.get('id') || '')));

    this.configureFacade.configure(
      this.configureFormComponent.configureForm!.valueChanges
    );
  }

  handleCopyClick(imageUrl: string) {
    this.clipBoard.copy(imageUrl);
  }
}
