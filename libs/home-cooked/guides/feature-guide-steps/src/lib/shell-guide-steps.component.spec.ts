import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellGuideStepsComponent } from './shell-guide-steps.component';

describe('ShellGuideStepsComponent', () => {
  let component: ShellGuideStepsComponent;
  let fixture: ComponentFixture<ShellGuideStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellGuideStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellGuideStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
