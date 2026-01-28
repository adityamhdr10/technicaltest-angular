import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { countries, categoryFood } from '../../shared/data/recipe.data';
import { Meal } from '../../shared/data/recipe.data';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss'],
})
export class FormDetailComponent {
  countries = countries;
  categories = categoryFood;

  selectedCountry: any;
  selectedCategory: any;

  foodName: string = '';
  imageUrl: string = '';
  youtubeLink: string = '';
  ingredients: string[] = [];
  instructions: string = '';
  sourceLink: string = '';

  constructor(private router: Router) {
    console.log('=== Form Detail Component Initialized ===');
    console.log('Available Countries:', this.countries);
    console.log('Available Categories:', this.categories);

    // Check existing dummy meals in localStorage
    const existingMeals = JSON.parse(
      localStorage.getItem('dummyMeals') || '[]',
    );
    console.log('Existing Dummy Meals in localStorage:', existingMeals);
  }

  onImageSelect(event: any) {
    console.log('=== Image Selection Event ===');
    console.log('Event:', event);

    const file = event.files[0];
    console.log('Selected File:', file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        console.log(
          'Image URL Generated:',
          this.imageUrl?.substring(0, 50) + '...',
        );
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    console.log('=== Form Submission Started ===');
    console.log('Food Name:', this.foodName);
    console.log('Selected Category:', this.selectedCategory);
    console.log('Selected Country:', this.selectedCountry);
    console.log('Image URL:', this.imageUrl ? 'Image present' : 'No image');
    console.log('YouTube Link:', this.youtubeLink);
    console.log('Ingredients:', this.ingredients);
    console.log('Instructions:', this.instructions);
    console.log('Source Link:', this.sourceLink);

    if (!this.foodName || !this.selectedCategory || !this.selectedCountry) {
      console.warn('⚠️ Validation Failed: Missing required fields');
      alert('Please fill in all required fields');
      return;
    }

    const dummyData: Meal = {
      idMeal: 'dummy_' + Date.now(),
      strMeal: this.foodName,
      strCategory: this.selectedCategory.name,
      strArea: this.selectedCountry.name,
      strMealThumb:
        this.imageUrl || 'https://via.placeholder.com/300x300?text=No+Image',
      strYoutube: this.youtubeLink || '',
      strInstructions: this.instructions,
      strSource: this.sourceLink || '',
      isDummy: true,
    };

    this.ingredients.forEach((ing, index) => {
      dummyData[`strIngredient${index + 1}`] = ing;
    });

    console.log('Created Dummy Meal Object:', dummyData);

    let dummyMeals = JSON.parse(localStorage.getItem('dummyMeals') || '[]');

    dummyMeals.push(dummyData);

    localStorage.setItem('dummyMeals', JSON.stringify(dummyMeals));

    console.log('Navigating to home page...');
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
