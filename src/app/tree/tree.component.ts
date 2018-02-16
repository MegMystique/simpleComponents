import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  tree: any = [];
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.setTreeData().subscribe(res => {this.tree = res; } );
  }

}
