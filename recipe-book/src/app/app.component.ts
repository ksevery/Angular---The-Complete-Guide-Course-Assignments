import { Component } from '@angular/core';
import { Pages } from './helpers/navEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  currentPage: Pages = Pages.RecipeBook;
  pages = Pages;

  onHeaderLinkClicked(newPage: Pages) {
    this.currentPage = newPage;
  }
}
