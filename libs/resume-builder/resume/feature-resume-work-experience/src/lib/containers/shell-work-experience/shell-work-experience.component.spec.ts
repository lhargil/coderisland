import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellWorkExperienceComponent } from './shell-work-experience.component';

describe('ShellWorkExperienceComponent', () => {
  let component: ShellWorkExperienceComponent;
  let fixture: ComponentFixture<ShellWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
