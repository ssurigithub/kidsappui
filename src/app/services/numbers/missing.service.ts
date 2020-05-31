import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouteCategory } from 'src/app/Models/Route';
import { DataService } from '../common/data.service';

@Injectable({
  providedIn: 'root',
})
export class MissingService {
  constructor(private http: HttpClient, private dataService: DataService) {}

  getData<T>(): Observable<T> {
    console.log(
      'inside missing service' +
        this.dataService.getServiceRoute(RouteCategory.Numbers)
    );
    return this.http.get<T>(
      this.dataService.getServiceRoute(RouteCategory.Numbers)
    );
  }
}
