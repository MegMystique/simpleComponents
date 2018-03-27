import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  board: Array<any>;
  symbol: String = 'x';
  result: String;
  clicks = 0;

  constructor() {
  }

  ngOnInit() {
    this.board = [{type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'},
      {type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'}];
  }

  checkBtn(i) {
    this.board[i].name = this.symbol;
    this.clicks += 1;
    if (this.clicks === 9) {
      this.result = 'NO WINNER';
    }
    this.symbol = this.symbol === 'x' ? 'o' : 'x';
    if (this.board[0].name === this.board[1].name && this.board[1].name === this.board[2].name && this.board[2].name !== '_') {
      this.result = 'WIN';
      this.board[0].type = true;
      this.board[1].type = true;
      this.board[2].type = true;
    }
    if (this.board[3].name === this.board[4].name && this.board[4].name === this.board[5].name && this.board[5].name !== '_') {
      this.result = 'WIN';
      this.board[3].type = true;
      this.board[4].type = true;
      this.board[5].type = true;
    }
    if
    (this.board[6].name === this.board[7].name && this.board[7].name === this.board[8].name && this.board[8].name !== '_') {
      this.result = 'WIN';
      this.board[6].type = true;
      this.board[7].type = true;
      this.board[8].type = true;
    }
    if
    (this.board[0].name === this.board[3].name && this.board[3].name === this.board[6].name && this.board[6].name !== '_') {
      this.result = 'WIN';
      this.board[0].type = true;
      this.board[3].type = true;
      this.board[6].type = true;
    }
    if
    (this.board[1].name === this.board[4].name && this.board[4].name === this.board[7].name && this.board[7].name !== '_') {
      this.result = 'WIN';
      this.board[1].type = true;
      this.board[4].type = true;
      this.board[7].type = true;
    }
    if
    (this.board[2].name === this.board[5].name && this.board[5].name === this.board[8].name && this.board[8].name !== '_') {
      this.result = 'WIN';
      this.board[2].type = true;
      this.board[5].type = true;
      this.board[8].type = true;
    }
    if
    (this.board[2].name === this.board[4].name && this.board[4].name === this.board[6].name && this.board[6].name !== '_') {
      this.result = 'WIN';
      this.board[2].type = true;
      this.board[4].type = true;
      this.board[6].type = true;
    }
    if
    (this.board[0].name === this.board[4].name && this.board[4].name === this.board[8].name && this.board[8].name !== '_') {
      this.result = 'WIN';
      this.board[0].type = true;
      this.board[4].type = true;
      this.board[8].type = true;
    }
  }

  resetGame() {
    this.board = [{type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'},
      {type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'}, {type: null, name: '_'}];
    this.result = null;
    this.symbol = 'x';
    this.clicks = 0;
  }
}
