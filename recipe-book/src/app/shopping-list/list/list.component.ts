import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingedientsChanged.subscribe(_ => {
      this.ingredients = this.shoppingListService.getIngredients();
    });
  }

}
