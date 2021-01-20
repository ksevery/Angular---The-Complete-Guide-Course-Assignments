import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('nameInput', { static: true }) nameInputref: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputref: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputref.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    this.shoppingListService.addIngredient(newIngredient);
  }

}
