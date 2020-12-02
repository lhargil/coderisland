import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellReferenceFormComponent } from './shell-reference-form.component';

describe('ShellReferenceFormComponent', () => {
  let component: ShellReferenceFormComponent;
  let fixture: ComponentFixture<ShellReferenceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellReferenceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellReferenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
