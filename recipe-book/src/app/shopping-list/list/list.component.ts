import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Test ingredient', 1),
    new Ingredient('Carrots', 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
