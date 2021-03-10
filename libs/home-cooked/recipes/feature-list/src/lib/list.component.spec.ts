import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.recipes = [{
    id: '',
    recipeTitle: '',
    recipeImage: '',
    recipeSummary: '',
    recipeBriefInformation: {
      course: '',
      cuisine: '',
      keyword: [''],
    },
    recipeTimes: { 'prepTime': '', 'cookTime': '' },
    recipeIngredients: [],
    recipeInstructions: [],
  }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
