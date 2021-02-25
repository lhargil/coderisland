import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellConfigureComponent } from './shell-configure.component';

import { RouterTestingModule } from '@angular/router/testing';
import { ConfigurePreviewComponent } from './configure-preview.component';
import { ConfigureFormComponent } from './configure-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ShellConfigureComponent', () => {
  let component: ShellConfigureComponent;
  let fixture: ComponentFixture<ShellConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [ ShellConfigureComponent, ConfigureFormComponent, ConfigurePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
