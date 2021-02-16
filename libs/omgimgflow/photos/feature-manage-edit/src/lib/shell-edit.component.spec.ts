import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ShellEditComponent } from './shell-edit.component';

import { UiEditFormModule } from '@coderisland/omgimgflow/photos/shared/ui-edit-form';

describe('ShellEditComponent', () => {
  let component: ShellEditComponent;
  let fixture: ComponentFixture<ShellEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ReactiveFormsModule, UiEditFormModule],
      declarations: [ ShellEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
