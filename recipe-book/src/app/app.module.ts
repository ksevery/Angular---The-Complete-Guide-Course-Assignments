import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './shopping-list/list/list.component';
import { EditComponent } from './shopping-list/edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookListComponent } from './recipe-book/recipe-book-list/recipe-book-list.component';
import { RecipeBookItemComponent } from './recipe-book/recipe-book-item/recipe-book-item.component';
import { RecipeBookDetailComponent } from './recipe-book/recipe-book-detail/recipe-book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    HeaderComponent,
    RecipeBookListComponent,
    RecipeBookItemComponent,
    RecipeBookDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
