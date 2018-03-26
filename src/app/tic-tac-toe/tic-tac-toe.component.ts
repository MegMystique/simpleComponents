import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  board: Array<String> ;
  symbol: String = 'x';
  result: String;

  constructor() {
  }

  ngOnInit() {
    this.board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
  }

  checkBtn(i) {
    this.board[i] = this.symbol;
    this.symbol = this.symbol === 'x' ? 'o' : 'x';
    console.log(this.board[0] , this.board[1] , this.board[2]);
    if (this.board[0] === this.board[1] && this.board[1] === this.board[2]  && this.board[2] !== '_' ||
    (this.board[3] === this.board[4] && this.board[4] === this.board[5] && this.board[5] !== '_') ||
    (this.board[6] === this.board[7] && this.board[7] === this.board[8] && this.board[8] !== '_') ||
    (this.board[0] === this.board[3] && this.board[3] === this.board[6] && this.board[6] !== '_') ||
    (this.board[1] === this.board[4] && this.board[4] === this.board[7] && this.board[7] !== '_') ||
    (this.board[2] === this.board[5] && this.board[5] === this.board[8] && this.board[8] !== '_') ||
    (this.board[0] === this.board[4] && this.board[4] === this.board[8] && this.board[8] !== '_') )     {
      this.result = 'WIN';
    }
  }

  resetGame() {
    this.board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
    this.result = null;
    this.symbol = 'x';
    // добавить ничью
  }
}
