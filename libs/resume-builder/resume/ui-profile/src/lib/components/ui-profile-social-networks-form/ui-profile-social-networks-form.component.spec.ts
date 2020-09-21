import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProfileSocialNetworksFormComponent } from './ui-profile-social-networks-form.component';

describe('UiProfileSocialNetworksFormComponent', () => {
  let component: UiProfileSocialNetworksFormComponent;
  let fixture: ComponentFixture<UiProfileSocialNetworksFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiProfileSocialNetworksFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiProfileSocialNetworksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
