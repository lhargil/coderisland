import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellProfileDetailsComponent } from './shell-profile-details.component';

describe('ShellProfileDetailsComponent', () => {
  let component: ShellProfileDetailsComponent;
  let fixture: ComponentFixture<ShellProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
