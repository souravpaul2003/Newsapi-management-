import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsapiService {
  constructor(private _http: HttpClient) { }

  topNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=c78c0eab92504ed2a74ce7102cf494a1';

  techNews='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c78c0eab92504ed2a74ce7102cf494a1'
  
  topHeadlines(): Observable<any>{
    return this._http.get(this.topNews);
    
  }
  techHeadlines(): Observable<any>{
    return this._http.get(this.techNews);
  }

  
}

