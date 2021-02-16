import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ShellCreateComponent } from './shell-create.component';

import { UiEditFormModule } from '@coderisland/omgimgflow/photos/shared/ui-edit-form';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShellCreateComponent', () => {
  let component: ShellCreateComponent;
  let fixture: ComponentFixture<ShellCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiEditFormModule, ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      declarations: [ ShellCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
