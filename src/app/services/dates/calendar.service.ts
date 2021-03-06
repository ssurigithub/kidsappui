import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../common/data.service';
import { RouteCategory } from 'src/app/Models/Route';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient, private dataService: DataService) {}

  getData<T>(): Observable<T> {
    console.log(
      'inside missing service' +
        this.dataService.getServiceRoute(RouteCategory.Dates)
    );
    return this.http.get<T>(
      this.dataService.getServiceRoute(RouteCategory.Dates)
    );
  }
}
