import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'resb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'resume-builder';

  searchForm!: FormGroup;

  layout = 'public';

  @ViewChild('publicTemplate', { static: true}) publicTemplate: TemplateRef<HTMLElement> | undefined;
  @ViewChild('adminTemplate', { static: true}) adminTemplate: TemplateRef<HTMLElement> | undefined;
  @ViewChild('homeTemplate', { static: true}) homeTemplate: TemplateRef<HTMLElement> | undefined;

  get template(): TemplateRef<HTMLElement> | undefined {
    if (this.layout == 'home') {
      return this.homeTemplate;
    } else if (this.layout == 'public') {
      return this.publicTemplate;
    }
    return this.adminTemplate;
  }

  constructor(private translate: TranslateService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.translate.addLangs(['en', 'sv']);
    this.translate.setDefaultLang('sv');
    this.searchForm = this.fb.group({
      sample: ['']
    });
  }



  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.layout = this.activatedRoute.firstChild?.snapshot.data.layout || 'admin';
      }
    });
  }
}
