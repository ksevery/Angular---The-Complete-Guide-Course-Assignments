import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-book-detail',
  templateUrl: './recipe-book-detail.component.html',
  styleUrls: ['./recipe-book-detail.component.css'],
})
export class RecipeBookDetailComponent implements OnInit {
  public recipe: Recipe;

  constructor(
    private slService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(id);
    });
  }

  onGoToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
