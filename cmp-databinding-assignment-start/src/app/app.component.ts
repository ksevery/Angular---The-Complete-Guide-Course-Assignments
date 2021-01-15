import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNums: number[] = [];
  evenNums: number[] = [];

  onNumberIncremented(eventData: number): void {
    if (eventData % 2 === 0) {
      this.evenNums.push(eventData);
    } else {
      this.oddNums.push(eventData);
    }
  }
}
