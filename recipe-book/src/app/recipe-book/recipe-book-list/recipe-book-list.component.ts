import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-book-list',
  templateUrl: './recipe-book-list.component.html',
  styleUrls: ['./recipe-book-list.component.css']
})
export class RecipeBookListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://tse3.mm.bing.net/th?id=OIP.bi91Vk9aEGwKHbqsgiUrsQHaFj&pid=Api')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}