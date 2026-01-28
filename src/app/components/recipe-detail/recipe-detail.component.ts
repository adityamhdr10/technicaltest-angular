import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  data: any = null;
  mealId: string = '';
  loading: boolean = false;

  ingredients: { ingredient: string; measure: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) {}

  ngOnInit(): void {
    this.mealId = this.route.snapshot.paramMap.get('id') || '';
    this.loadRecipeDetail();
  }

  loadRecipeDetail() {
    if (this.mealId.startsWith('dummy_')) {
      this.loadDummyData();
    } else {
      this.loadApiData();
    }
  }

  loadDummyData() {
    this.loading = true;
    const dummyMeals = JSON.parse(localStorage.getItem('dummyMeals') || '[]');
    this.data = dummyMeals.find((meal: any) => meal.idMeal === this.mealId);

    if (this.data) {
      this.extractIngredients();
    }
    this.loading = false;
  }

  loadApiData() {
    this.loading = true;
    this.recipeService.getRecipesById(this.mealId).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.data = response.meals ? response.meals[0] : null;
        if (this.data) {
          this.extractIngredients();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading recipe detail:', error);
        this.loading = false;
      },
    });
  }

  extractIngredients(): void {
    this.ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.data[`strIngredient${i}`];
      const measure = this.data[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        this.ingredients.push({
          ingredient: ingredient,
          measure: measure?.trim() || '',
        });
      }
    }
  }
}
