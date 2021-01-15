import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pages } from '../helpers/navEnum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerLinkClicked = new EventEmitter<Pages>();
  pages = Pages;

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onNavClicked(newPage) {
    this.headerLinkClicked?.emit(newPage);
  }

}
