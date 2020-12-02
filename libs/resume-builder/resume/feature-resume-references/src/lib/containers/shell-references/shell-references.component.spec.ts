import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellReferencesComponent } from './shell-references.component';

describe('ShellReferencesComponent', () => {
  let component: ShellReferencesComponent;
  let fixture: ComponentFixture<ShellReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
