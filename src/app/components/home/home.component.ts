import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/common/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Calendar } from 'src/app/Models/calendar';
import { RoutePath, RouteCategory, SkillLevel } from 'src/app/Models/Route';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    console.log(this.router.config);

    const routePaths: RoutePath[] = this.router.config.map((x) => {
      console.log(x);
      if (x.path != '') {
        var route: RoutePath = new RoutePath();
        route.path = x.path;
        route.category = this.getRouteCategory(x.path.toUpperCase());
        route.level = SkillLevel.LevelOne;
        return route;
      }
    });

    console.log(routePaths);
    const path = this.dataService.getRoute(routePaths.filter(Boolean));
    console.log(path);

    this.router.navigateByUrl(path.path);
  }

  getRouteCategory(path: string) {
    switch (path) {
      case 'dates/calendar': {
        return RouteCategory.Dates;
      }

      case 'numbers/missing': {
        return RouteCategory.Numbers;
      }
    }
  }
}
