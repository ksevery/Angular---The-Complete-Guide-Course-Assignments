import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  ingredientId: number = null;

  model: Ingredient = new Ingredient('', 0);

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.selectedIngredient.subscribe((id) => {
      this.ingredientId = id;
      if (id !== null && id !== undefined) {
        this.model = this.shoppingListService.getIngredient(id);
      }
    });
  }

  onAddItem() {
    this.shoppingListService.addIngredient(this.model);
  }

  onClear() {
    this.model = new Ingredient('', 0);
  }

  onDelete() {
    if (this.ingredientId !== null && this.ingredientId !== undefined) {
      this.shoppingListService.deleteIngredient(this.ingredientId);
      this.ingredientId = null;
      this.onClear();
    }
  }
}
