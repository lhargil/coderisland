import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkFormComponent } from './social-network-form.component';

describe('SocialNetworkFormComponent', () => {
  let component: SocialNetworkFormComponent;
  let fixture: ComponentFixture<SocialNetworkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
