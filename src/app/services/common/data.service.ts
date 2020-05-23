import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // make a call to the gateway and get the response.

  apiUrl: string = 'http://localhost:3003/api/common';

  getData<T>(): Observable<T> {
    return this.http.get<T>(this.apiUrl);
  }
}
