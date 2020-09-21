import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellProfileSocialNetworksFormComponent } from './shell-profile-social-networks-form.component';

describe('ShellProfileSocialNetworksFormComponent', () => {
  let component: ShellProfileSocialNetworksFormComponent;
  let fixture: ComponentFixture<ShellProfileSocialNetworksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellProfileSocialNetworksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellProfileSocialNetworksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
