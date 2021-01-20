import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService{
  private counter = 0;

  incrementCounter() {
    this.counter++;
    console.log('Actions taken so far: ' + this.counter);
  }

}
