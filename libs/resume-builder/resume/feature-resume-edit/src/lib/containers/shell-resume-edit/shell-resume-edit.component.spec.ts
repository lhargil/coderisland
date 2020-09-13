import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellResumeEditComponent } from './shell-resume-edit.component';

describe('ShellResumeEditComponent', () => {
  let component: ShellResumeEditComponent;
  let fixture: ComponentFixture<ShellResumeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellResumeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellResumeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
