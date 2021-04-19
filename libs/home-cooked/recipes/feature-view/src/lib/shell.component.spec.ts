import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewComponent } from './view.component';
import { HomeCookedSharedDataAccessModule } from '@coderisland/home-cooked/shared/data-access';
import { DialogModule, DialogService } from '@ngneat/dialog';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, HomeCookedSharedDataAccessModule, DialogModule.forRoot()],
      providers: [DialogService],
      declarations: [ ShellComponent, ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
