import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-book-item',
  templateUrl: './recipe-book-item.component.html',
  styleUrls: ['./recipe-book-item.component.css']
})
export class RecipeBookItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeItemClicked() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
