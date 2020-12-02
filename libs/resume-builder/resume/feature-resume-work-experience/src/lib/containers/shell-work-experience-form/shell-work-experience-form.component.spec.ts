import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellWorkExperienceFormComponent } from './shell-work-experience-form.component';

describe('ShellWorkExperienceFormComponent', () => {
  let component: ShellWorkExperienceFormComponent;
  let fixture: ComponentFixture<ShellWorkExperienceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellWorkExperienceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellWorkExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
