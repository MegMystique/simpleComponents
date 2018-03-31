import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import {HttpClient} from '@angular/common/http';
import { ChangeEvent } from 'angular-virtual-list';
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  items = [];
  items$ = new BehaviorSubject<any>(null);
  viewPortItems = [];
  page = 1;
  total = 0;
  loading: boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`assets/vacancy-${this.page}.json`).subscribe(res => {
      this.items.push(...res['items']);
      this.items$.next(this.items.slice());
      this.total = res['found'];
      console.log(this.items, this.items$, this.total);
    });
  }

  fetchMore($event: ChangeEvent) {
    if (this.items.length < this.total && $event.end === this.items.length) {
      this.loading = true;
      this.page += 1;
      this.http.get(`assets/vacancy-${this.page}.json`).subscribe(res => {
        this.items.push(...res['items']);
        this.total = res['found'];
        this.items$.next(this.items.slice());
        this.loading = false;
      });
    }
  }
}
