import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellPreviewComponent } from './shell-preview.component';

describe('ShellPreviewComponent', () => {
  let component: ShellPreviewComponent;
  let fixture: ComponentFixture<ShellPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
