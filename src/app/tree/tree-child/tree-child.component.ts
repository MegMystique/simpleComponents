import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tree-child',
  templateUrl: './tree-child.component.html',
  styleUrls: ['./tree-child.component.css']
})
export class TreeChildComponent implements OnInit {
  @Input() tree = [];
  constructor() { }

  ngOnInit() {
  }

}
