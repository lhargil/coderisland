import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellPageLoaderComponent } from './shell-page-loader.component';

describe('ShellPageLoaderComponent', () => {
  let component: ShellPageLoaderComponent;
  let fixture: ComponentFixture<ShellPageLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellPageLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellPageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
