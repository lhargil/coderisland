import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePreviewComponent } from './configure-preview.component';

describe('ConfigurePreviewComponent', () => {
  let component: ConfigurePreviewComponent;
  let fixture: ComponentFixture<ConfigurePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
