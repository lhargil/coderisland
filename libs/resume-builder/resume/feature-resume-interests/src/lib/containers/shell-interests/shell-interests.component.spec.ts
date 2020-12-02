import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellInterestsComponent } from './shell-interests.component';

describe('ShellInterestsComponent', () => {
  let component: ShellInterestsComponent;
  let fixture: ComponentFixture<ShellInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
