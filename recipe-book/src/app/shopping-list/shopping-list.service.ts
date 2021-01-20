import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient-model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingedientsChanged = new EventEmitter();

  private ingredients: Ingredient[] = [
    new Ingredient('Test ingredient', 1),
    new Ingredient('Carrots', 5)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingedientsChanged.emit();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingedientsChanged.emit();
  }
}
