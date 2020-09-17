import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellProfileFormComponent } from './shell-profile-form.component';

describe('ShellProfileFormComponent', () => {
  let component: ShellProfileFormComponent;
  let fixture: ComponentFixture<ShellProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
