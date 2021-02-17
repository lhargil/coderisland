import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellConfigureComponent } from './shell-configure.component';

describe('ShellConfigureComponent', () => {
  let component: ShellConfigureComponent;
  let fixture: ComponentFixture<ShellConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellConfigureComponent ]
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
