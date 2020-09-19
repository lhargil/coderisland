import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'resb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-builder';

  searchForm!: FormGroup;

  constructor(private translate: TranslateService, private fb: FormBuilder) {
    this.translate.addLangs(['en', 'sv']);
    this.translate.setDefaultLang('sv');
    this.searchForm = this.fb.group({
      sample: ['']
    });
  }
}
