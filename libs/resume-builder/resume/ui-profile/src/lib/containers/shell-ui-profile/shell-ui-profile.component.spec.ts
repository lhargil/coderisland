import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellUiProfileComponent } from './shell-ui-profile.component';

describe('ShellUiProfileComponent', () => {
  let component: ShellUiProfileComponent;
  let fixture: ComponentFixture<ShellUiProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellUiProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellUiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
