import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellResumeDetailsComponent } from './shell-resume-details.component';

describe('ShellResumeDetailsComponent', () => {
  let component: ShellResumeDetailsComponent;
  let fixture: ComponentFixture<ShellResumeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellResumeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellResumeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
