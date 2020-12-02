import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellSocialNetworkFormComponent } from './shell-social-network-form.component';

describe('ShellSocialNetworkFormComponent', () => {
  let component: ShellSocialNetworkFormComponent;
  let fixture: ComponentFixture<ShellSocialNetworkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellSocialNetworkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellSocialNetworkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
