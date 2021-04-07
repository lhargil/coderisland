import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogModule, DialogService } from '@ngneat/dialog';
import { HomeCookedShellUiMainViewModule } from '@coderisland/home-cooked/shell/ui/main-view';
import { HomeCookedShellUiNavBarModule } from '@coderisland/home-cooked/shell/ui/nav-bar';
import { HomeCookedShellUiFooterModule } from '@coderisland/home-cooked/shell/ui/footer';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, DialogModule, HomeCookedShellUiNavBarModule, HomeCookedShellUiMainViewModule, HomeCookedShellUiFooterModule],
      declarations: [ LayoutComponent ],
      providers: [{
        provide: DialogService, useValue: {}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
