import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  getAllRecipes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.php?s=`);
  }

  getRecipesById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }

  getRecipesSearch(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.php?s=${query}`);
  }
}
