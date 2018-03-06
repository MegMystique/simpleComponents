import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  @Input() vacancy;
  constructor() { }

  ngOnInit() {
  }

}
