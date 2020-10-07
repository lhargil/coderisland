import { Component, Input, OnInit } from '@angular/core';
import { ResumeReference } from '@coderisland/resume-builder/domain/interfaces';
import { SlideInService } from '@coderisland/ui-kit/slide-in/service';
import { SlideInModes } from '@coderisland/ui-kit/slide-in/state';
import { ShellReferenceFormComponent } from '../shell-reference-form/shell-reference-form.component';

@Component({
  selector: 'resb-shell-references',
  templateUrl: './shell-references.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellReferencesComponent implements OnInit {
  @Input()  resumeReferences!: ResumeReference[];
  constructor(private slideInService: SlideInService) { }

  ngOnInit(): void {
  }

  addReference() {
    this.slideInService.show({
      heading: 'Add new reference',
      formData: {},
      modalMode: SlideInModes.Create,
      component: ShellReferenceFormComponent,
      handleSave: this.handleSave()
    });
  }

  editReference(index: number) {
    this.slideInService.show({
      heading: 'Edit reference',
      formData: this.resumeReferences.find((_, i) => i == index),
      modalMode: SlideInModes.Update,
      component: ShellReferenceFormComponent,
      handleSave: this.handleSave()
    });
  }

  handleSave(): (eventData: any, afterSave?: () => void) => void {
    return (x) => {
      console.log('hello world');
    };
  }
}
