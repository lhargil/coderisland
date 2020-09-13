import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellResumeListComponent } from './shell-resume-list.component';

describe('ShellResumeListComponent', () => {
  let component: ShellResumeListComponent;
  let fixture: ComponentFixture<ShellResumeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellResumeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellResumeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
