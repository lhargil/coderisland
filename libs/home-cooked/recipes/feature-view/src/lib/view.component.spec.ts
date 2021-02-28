import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFacade } from '@coderisland/home-cooked/recipes/data-access';

import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    component.recipe = {
      recipeTitle: '',
      recipeImage: '',
      recipeSummary: '',
      recipeBriefInformation: {
        course: '',
        cuisine: '',
        keyword: [''],
      },
      recipeTimes: { 'prep time': '15 minutes', 'cook time': '2 hours' },
      recipeIngredients: [],
      recipeInstructions: [],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
