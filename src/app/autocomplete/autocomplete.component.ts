import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  searchText: any;
  vacancies = [];
  current: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.streamData.subscribe(res => this.vacancies = res);
    this.dataService.getSomething();
  }
  search(searchText) {
    if (searchText && searchText.length) {
    this.dataService.search(searchText);
    }    else {
      this.vacancies = [];
    }
  }
  select(item) {
    this.searchText = item.title;
    this.current = item;
    this.vacancies = [];
  }
}
