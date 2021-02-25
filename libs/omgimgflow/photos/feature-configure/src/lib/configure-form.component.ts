import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageFlowSettings } from '@coderisland/omgimgflow/photos/domain';

@Component({
  selector: 'omgimg-configure-form',
  templateUrl: './configure-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigureFormComponent implements OnInit {
  configureForm: FormGroup;

  private _imageFlowSettings: ImageFlowSettings | null = null;

  @Input()
  set imageFlowSettings(value: ImageFlowSettings | null) {
    this._imageFlowSettings = value;
    this.configureForm!.patchValue(value!, {emitEvent: false});
  }

  @Input()
  imageTransformModes: string[] = [];

  @Input()
  imageTransformScales: string[] = [];

  constructor(private readonly formBuilder: FormBuilder) {
    this.configureForm = this.formBuilder.group({
      width: [100],
      height: [100],
      mode: ['max'],
      scale: ['both'],
      sepia: [false]
    });
  }

  ngOnInit(): void {
  }

  createForm(imageFlowSettings: ImageFlowSettings) {
    this.configureForm = this.formBuilder.group({
      width: [imageFlowSettings.width],
      height: [imageFlowSettings.height],
      mode: [imageFlowSettings.mode],
      scale: [imageFlowSettings.scale],
      sepia: [imageFlowSettings.sepia]
    });

    return this.configureForm;
  }
}
