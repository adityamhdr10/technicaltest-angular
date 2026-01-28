import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  public meals: any[] = [];
  public dummyMeals: any[] = [];
  public filteredMeals: any[] = [];
  public searchText: string = '';
  public loading: boolean = false;
  private searchSubject = new Subject<string>();

  constructor(
    private router: Router,
    private recipeService: RecipeService,
  ) {}

  ngOnInit() {
    this.loadDummyMeals();
    this.loadAllRecipes();
    this.setupSearch();
  }

  goToPage(ids: string) {
    this.router.navigate(['recipe-detail', ids]);
  }

  loadDummyMeals() {
    const stored = localStorage.getItem('dummyMeals');
    this.dummyMeals = stored ? JSON.parse(stored) : [];
  }

  loadAllRecipes() {
    this.loading = true;
    this.recipeService.getAllRecipes().subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.meals = response.meals || [];
        this.filteredMeals = [...this.dummyMeals, ...this.meals];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading recipes:', error);
        this.filteredMeals = [...this.dummyMeals];
        this.loading = false;
      },
    });
  }

  performSearch(query: string) {
    if (query === '') {
      this.loadAllRecipes();
      return;
    }

    this.loading = true;
    this.recipeService.getRecipesSearch(query).subscribe({
      next: (response) => {
        const apiResults = response.meals || [];

        const filteredDummy = this.dummyMeals.filter(
          (meal) =>
            meal.strMeal.toLowerCase().includes(query.toLowerCase()) ||
            meal.strCategory.toLowerCase().includes(query.toLowerCase()) ||
            meal.strArea.toLowerCase().includes(query.toLowerCase()),
        );

        this.filteredMeals = [...filteredDummy, ...apiResults];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error searching recipes:', error);

        const filteredDummy = this.dummyMeals.filter((meal) =>
          meal.strMeal.toLowerCase().includes(query.toLowerCase()),
        );
        this.filteredMeals = filteredDummy;
        this.loading = false;
      },
    });
  }

  setupSearch() {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchText) => {
        this.performSearch(searchText);
      });
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
    this.searchSubject.next(this.searchText);
  }

  ngOnDestroy() {
    this.searchSubject.complete();
  }
}
