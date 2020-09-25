import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellLanguagesComponent } from './shell-languages.component';

describe('ShellLangugagesComponent', () => {
  let component: ShellLanguagesComponent;
  let fixture: ComponentFixture<ShellLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
