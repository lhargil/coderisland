import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

import { ShellListComponent } from './shell-list.component';

import { RouterTestingModule } from '@angular/router/testing';
import { ListFacade, OmgimgflowPhotosDomainModule } from '@coderisland/omgimgflow/photos/domain';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('ShellListComponent', () => {
  let component: ShellListComponent;
  let fixture: ComponentFixture<ShellListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule],
      declarations: [ ShellListComponent, ListComponent ],
      providers: [ListFacade]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
