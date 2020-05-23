import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  apiUrl: string = 'http://localhost:3003/api/dates';

  getData<T>(): Observable<T> {
    return this.http.get<T>(this.apiUrl);
  }
}
