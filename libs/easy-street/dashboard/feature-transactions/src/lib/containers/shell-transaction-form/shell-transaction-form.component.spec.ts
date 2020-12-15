import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellTransactionFormComponent } from './shell-transaction-form.component';

describe('ShellTransactionFormComponent', () => {
  let component: ShellTransactionFormComponent;
  let fixture: ComponentFixture<ShellTransactionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellTransactionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellTransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
