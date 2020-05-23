import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/dates/calendar.service';

import { Calendar } from 'src/app/Models/calendar';
import { Answer } from 'src/app/Models/Answer';
import { Question } from 'src/app/Models/Question';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.styl'],
})
export class CalendarComponent implements OnInit {
  constructor(private calService: CalendarService) {}

  getDay: number;
  daysInMonth: number;
  calendar: Calendar;
  dates = [];
  start = [];

  question: Question;
  hint: string;

  ngOnInit(): void {
    this.calService.getData<Calendar>().subscribe((c) => {
      this.calendar = c;
      this.question = this.calendar.question;

      this.daysInMonth = this.calendar.date.daysInMonth;
      this.dates = [...Array(this.daysInMonth).keys()].map((x) => x + 1);
      this.getDay = new Date(this.calendar.date.currentMonth).getDay();
      this.start = [...Array(this.getDay).keys()];
    });
  }

  applyClasses(x: number) {
    if (x != 0 && x % 7 == 0) {
      return {
        'col-md-3': true,
      };
    }
    return {
      'col-md-1 bg-dark text-white border': true,
    };
  }

  applyDateClasses(x) {
    if (x == this.calendar.date.currentDate) {
      return { 'col-md-1 bg-warning text-white border': true };
    }

    return {
      'col-md-1 bg-dark text-white border': true,
    };
  }
}
