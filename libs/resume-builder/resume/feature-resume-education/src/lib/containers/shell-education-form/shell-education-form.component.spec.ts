import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellEducationFormComponent } from './shell-education-form.component';

describe('ShellEducationFormComponent', () => {
  let component: ShellEducationFormComponent;
  let fixture: ComponentFixture<ShellEducationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellEducationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellEducationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
