import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiEditFormComponent } from './ui-edit-form.component';

describe('UiEditFormComponent', () => {
  let component: UiEditFormComponent;
  let fixture: ComponentFixture<UiEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
