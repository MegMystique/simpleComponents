import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinct';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies = [];
  page = 1;
  total = 1;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(`assets/vacancy-${this.page}.json`).subscribe(res => {
      this.vacancies = res['items'];
      this.total = res['found'];
    });
    Observable.fromEvent(window, 'scroll')
      .map(() => window.scrollY)
      .filter(current => current >= document.body.clientHeight - window.innerHeight - 100)
      .debounceTime(200)
      .distinct()
      .subscribe(() => {
        this.addVacancies();
      });
  }

  addVacancies() {
    if (this.vacancies.length < this.total) {
      this.page += 1;
      this.http.get(`assets/vacancy-${this.page}.json`).subscribe(res => {
        this.vacancies.push(...res['items']);
      });
    }
  }
}
