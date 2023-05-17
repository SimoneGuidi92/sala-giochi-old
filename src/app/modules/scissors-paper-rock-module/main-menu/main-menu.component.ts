import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  cells: string[] = Array(9).fill('');
  player: string = 'X';
  winner: string = '';

  makeMove(index: number): void {
    if (this.cells[index] === '' && !this.winner) {
      this.cells[index] = this.player;
      this.checkForWinner();
      this.player = this.player === 'X' ? 'O' : 'X';
    }
  }

  checkForWinner(): void {
    const winningLines = [      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let line of winningLines) {
      const [a, b, c] = line;
      if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[b] === this.cells[c]) {
        this.winner = this.cells[a];
        console.log("WINNER: " + this.winner);

      }
    }
  }

  reset(): void {
    this.cells = Array(9).fill('');
    this.player = 'X';
    this.winner = '';
  }

}
