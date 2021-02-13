import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageFlowSettings } from '@coderisland/omgimgflow/photos/domain';

@Component({
  selector: 'coderisland-configure-form',
  templateUrl: './configure-form.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigureFormComponent implements OnInit {
  configureForm!: FormGroup;
  imageTransformModes: string[] = [];
  imageTransformScales: string[] = [];
  constructor(private readonly formBuilder: FormBuilder) { }

  createForm(imageFlowSettings: ImageFlowSettings, transformModes: string[], transformScales: string[]) {
    this.configureForm = this.formBuilder.group({
      width: [imageFlowSettings.width],
      height: [imageFlowSettings.height],
      mode: [imageFlowSettings.mode],
      scale: [imageFlowSettings.scale],
      sepia: [imageFlowSettings.sepia]
    });

    this.imageTransformModes = transformModes;
    this.imageTransformScales = transformScales;
    return this.configureForm
  }

  ngOnInit(): void {
  }
}
