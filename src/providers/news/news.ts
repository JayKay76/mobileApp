import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews(): Observable<any> {
  	return this.http.get("https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=2ef41aaf1f0e40e58ba3f4c8f23ce284");
  }


  } 

