import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {

  constructor(private router: Router) {}

  goToPage() {
    this.router.navigate(['recipe-detail']);
  }

  dataMakanan = [
    {
      id: 1,
      name: 'makanan 1',
      image:
        'https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg',
    },
    {
      id: 2,
      name: 'makanan 2',
      image:
        'https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg',
    },
    {
      id: 3,
      name: 'makanan 3',
      image:
        'https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg',
    },
    {
      id: 4,
      name: 'makanan 4',
      image:
        'https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg',
    },
    {
      id: 5,
      name: 'makanan 5',
      image:
        'https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg',
    },
    {
      id: 6,
      name: 'makanan 5',
      image:
        'https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg',
    },
    {
      id: 7,
      name: 'makanan 5',
      image:
        'https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg',
    },
    {
      id: 8,
      name: 'makanan 5',
      image:
        'https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg',
    },
  ];
}
