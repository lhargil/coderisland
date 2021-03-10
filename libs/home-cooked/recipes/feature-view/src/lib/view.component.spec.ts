import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    component.recipe = {
      id: '',
      recipeTitle: '',
      recipeImage: '',
      recipeSummary: '',
      recipeBriefInformation: {
        course: '',
        cuisine: '',
        keyword: [''],
      },
      recipeTimes: { prepTime: '15 minutes', cookTime: '2 hours' },
      recipeIngredients: [],
      recipeInstructions: [],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
