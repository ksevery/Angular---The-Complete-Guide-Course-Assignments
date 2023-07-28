import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  selectedIndex: number;
  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients) => {
        console.log('ingredientsChanged', ingredients);
        this.ingredients = ingredients;
      }
    );
  }

  onSelectItem(id: number) {
    this.shoppingListService.selectIngredient(id);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
