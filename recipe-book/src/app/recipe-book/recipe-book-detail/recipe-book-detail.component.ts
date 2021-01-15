import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-book-detail',
  templateUrl: './recipe-book-detail.component.html',
  styleUrls: ['./recipe-book-detail.component.css']
})
export class RecipeBookDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
