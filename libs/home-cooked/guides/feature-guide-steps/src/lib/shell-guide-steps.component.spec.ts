import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCookedSharedDataAccessModule } from '@coderisland/home-cooked/shared/data-access';

import { ShellGuideStepsComponent } from './shell-guide-steps.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { GuideStepComponent } from './guide-step.component';

describe('ShellGuideStepsComponent', () => {
  let component: ShellGuideStepsComponent;
  let fixture: ComponentFixture<ShellGuideStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCookedSharedDataAccessModule, RouterTestingModule, StoreRouterConnectingModule],
      declarations: [ ShellGuideStepsComponent, GuideStepComponent ]
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
