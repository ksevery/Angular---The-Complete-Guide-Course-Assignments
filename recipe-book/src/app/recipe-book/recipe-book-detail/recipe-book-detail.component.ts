import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-book-detail',
  templateUrl: './recipe-book-detail.component.html',
  styleUrls: ['./recipe-book-detail.component.css']
})
export class RecipeBookDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onGoToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }

}
