import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellUiProfileFormComponent } from './shell-ui-profile-form.component';

describe('ShellUiProfileFormComponent', () => {
  let component: ShellUiProfileFormComponent;
  let fixture: ComponentFixture<ShellUiProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellUiProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellUiProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
