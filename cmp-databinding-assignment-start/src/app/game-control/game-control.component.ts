import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public gameButtonText: string = 'Start';
  @Output() onNumberIncremented = new EventEmitter<number>();
  public gameStarted: boolean = false;
  private ref: any;
  private counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onGameClick() {
    if (!this.gameStarted) {
      this.ref = setInterval(() => {
        this.counter++;
        this.onNumberIncremented?.emit(this.counter);
      }, 1000);
      this.gameButtonText = 'Stop';
    } else {
      clearInterval(this.ref);
      this.gameButtonText = 'Start';
    }

    this.gameStarted = !this.gameStarted;
  }

}
