import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellResumeSkillsComponent } from './shell-resume-skills.component';

describe('ShellResumeSkillsComponent', () => {
  let component: ShellResumeSkillsComponent;
  let fixture: ComponentFixture<ShellResumeSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellResumeSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellResumeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
