import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookGuideComponent } from './cook-guide.component';

describe('CookGuideComponent', () => {
  let component: CookGuideComponent;
  let fixture: ComponentFixture<CookGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
