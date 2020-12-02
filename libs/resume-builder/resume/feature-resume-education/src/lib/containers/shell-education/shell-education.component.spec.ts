import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellEducationComponent } from './shell-education.component';

describe('ShellEducationComponent', () => {
  let component: ShellEducationComponent;
  let fixture: ComponentFixture<ShellEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
