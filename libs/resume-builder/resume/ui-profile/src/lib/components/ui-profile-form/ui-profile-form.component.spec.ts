import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProfileFormComponent } from './ui-profile-form.component';

describe('UiProfileFormComponent', () => {
  let component: UiProfileFormComponent;
  let fixture: ComponentFixture<UiProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
