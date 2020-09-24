import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellInterestFormComponent } from './shell-interest-form.component';

describe('ShellInterestFormComponent', () => {
  let component: ShellInterestFormComponent;
  let fixture: ComponentFixture<ShellInterestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellInterestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellInterestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
