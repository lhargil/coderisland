import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellLanguageFormComponent } from './shell-language-form.component';

describe('ShellLanguageFormComponent', () => {
  let component: ShellLanguageFormComponent;
  let fixture: ComponentFixture<ShellLanguageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellLanguageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellLanguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
