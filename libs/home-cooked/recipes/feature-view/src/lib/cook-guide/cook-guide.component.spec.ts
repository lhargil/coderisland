import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef } from '@ngneat/dialog';

import { CookGuideComponent } from './cook-guide.component';

describe('CookGuideComponent', () => {
  let component: CookGuideComponent;
  let fixture: ComponentFixture<CookGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [DialogRef],
      declarations: [ CookGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookGuideComponent);
    component = fixture.componentInstance;
    component.ref.data = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
