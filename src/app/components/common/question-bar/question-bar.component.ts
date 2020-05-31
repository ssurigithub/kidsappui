import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/Models/Question';
import { Answer } from 'src/app/Models/Answer';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/common/data.service';
import { RoutePath, RouteCategory, SkillLevel } from 'src/app/Models/Route';

@Component({
  selector: 'app-question-bar',
  templateUrl: './question-bar.component.html',
  styleUrls: ['./question-bar.component.styl'],
})
export class QuestionBarComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  @Input()
  question: Question;
  correctAnswer: string;
  Answers = [];

  @Output()
  updateRoot: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.Answers = this.question.answers;
  }

  speak() {
    speechSynthesis.speak(new SpeechSynthesisUtterance(this.question.question));
  }

  utter(txt) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
  }

  updateRootFromParent(x: string) {
    console.log('inside question component: the value of x is ' + x);
    this.updateRoot.emit(x);
  }

  navigate() {
    console.log(this.router.config);
    const routePaths: RoutePath[] = this.router.config.map((x) => {
      if (x.path != '') {
        var route: RoutePath = new RoutePath();
        route.path = x.path;
        route.category = this.getRouteCategory(x.path.toUpperCase());
        route.level = SkillLevel.LevelOne;
        return route;
      }
    });

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
