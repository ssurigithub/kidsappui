import { Injectable } from '@angular/core';

import { ServiceRoutes, RouteCategory, RoutePath } from 'src/app/Models/Route';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // make a call to the gateway and get the response.

  apiPrefix: string = environment.api_prefix; //'http://localhost:3003';

  private shuffle(a): any[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  private getRandomRoute = (array) => {
    const x = this.shuffle(array);
    return x[0];
  };

  getServiceRoute(x: RouteCategory): string {
    const path: ServiceRoutes = new ServiceRoutes();
    switch (x) {
      case RouteCategory.Dates: {
        return `${this.apiPrefix}` + this.getRandomRoute(path.dates);
      }
      case RouteCategory.Numbers: {
        return `${this.apiPrefix}` + this.getRandomRoute(path.numbers);
      }
    }
    return `${this.apiPrefix}` + this.getRandomRoute(path.dates);
  }

  getRoute(a: RoutePath[]): RoutePath {
    return this.getRandomRoute(this.shuffle(a));
  }
}
