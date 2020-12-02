import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellProfileComponent } from './shell-profile.component';

describe('ShellProfileComponent', () => {
  let component: ShellProfileComponent;
  let fixture: ComponentFixture<ShellProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
