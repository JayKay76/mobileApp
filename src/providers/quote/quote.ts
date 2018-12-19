import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the QuoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuoteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuoteProvider Provider');
  }
   
  /*
  * The function below make the call to the API to get the quote source. The information is then extracted and put 
  * together when the below function are called on the HomePage.ts.  
  */

   getQuotes(): Observable<any>{
   	console.log('Hello');
  	return this.http.get("http://quotes.rest/qod.json");
 		
  	}
  } 

