import { Component, OnInit } from '@angular/core';
import { Pages } from './helpers/navEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recipe-book';

  ngOnInit(): void {
  }
}
