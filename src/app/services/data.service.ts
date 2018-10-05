import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) {
    console.log('Data service connected');
   }

  getPosts(): Observable {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map(res => {
      res.json();
    }
  }
}
