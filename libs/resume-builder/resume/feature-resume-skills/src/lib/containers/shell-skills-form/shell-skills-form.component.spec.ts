import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellSkillsFormComponent } from './shell-skills-form.component';

describe('ShellSkillsFormComponent', () => {
  let component: ShellSkillsFormComponent;
  let fixture: ComponentFixture<ShellSkillsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellSkillsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
