import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { Recipe } from './recipe-model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Schnitzel',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/5/5f/Wiener_Schnitzel_Wien2005_8319.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      2,
      'Burger',
      'More testing, yay!',
      'https://tse1.mm.bing.net/th?id=OIP.cHxzoNLUia6DttmIEtO-NwHaFj&pid=Api',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.find((recipe) => recipe.id === id);
  }
}
