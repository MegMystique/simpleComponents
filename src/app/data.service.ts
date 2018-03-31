import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {
  configUrl = 'assets/data.json';
  result: any;
  httpOptions: any;
  streamData = new Subject<any>();
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/vnd.github.v3+json'
      })
    };
  }
  getSomething() {
    this.http.get(this.configUrl, this.httpOptions).subscribe(res => {this.result = res; this.streamData.next(this.result); });
  }
  search(searchText) {
    this.streamData.next(this.result.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())).slice());
  }
  setTreeData() {
    return this.http.get('assets/tree.json');
  }
}
