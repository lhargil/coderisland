import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInShellComponent } from './slide-in-shell.component';

describe('SlideInShellComponent', () => {
  let component: SlideInShellComponent;
  let fixture: ComponentFixture<SlideInShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideInShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideInShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
