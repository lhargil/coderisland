import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeLanguage } from '@coderisland/resume-builder/domain/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LanguageFormComponent } from '../../components/language-form/language-form.component';

@Component({
  selector: 'resb-shell-language-form',
  templateUrl: './shell-language-form.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ShellLanguageFormComponent implements OnInit {
  @Input() formData!: ResumeLanguage;
  @ViewChild(LanguageFormComponent, { static: true }) languageFormComponent!: LanguageFormComponent;

  formIsValid$!: Observable<boolean>;

  private resumeLanguageForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.resumeLanguageForm = this.languageFormComponent.createGroup(this.formData);
    this.formIsValid$ = this.resumeLanguageForm.statusChanges
      .pipe(
        map((status: string) => status.toLowerCase() == 'valid')
      );
  }

}
