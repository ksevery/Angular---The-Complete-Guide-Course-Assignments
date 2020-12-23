import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shouldShowParagraph = false;
  buttonClickLogs: { timestamp: Date}[] = [];

  changeParapgraphVisibility() {
    this.shouldShowParagraph = ! this.shouldShowParagraph;
    this.buttonClickLogs.push({ timestamp: new Date() });
  }
}
