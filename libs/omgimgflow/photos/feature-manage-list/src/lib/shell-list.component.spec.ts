import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';

import { ShellListComponent } from './shell-list.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('ShellListComponent', () => {
  let component: ShellListComponent;
  let fixture: ComponentFixture<ShellListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ShellListComponent, ListComponent ]
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
