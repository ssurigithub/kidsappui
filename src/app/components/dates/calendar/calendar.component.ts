import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/dates/calendar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Calendar } from 'src/app/Models/calendar';
import { Answer } from 'src/app/Models/Answer';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.styl'],
})
export class CalendarComponent implements OnInit {
  constructor(
    private calService: CalendarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getDay: number;
  daysInMonth: number;
  calendar: Calendar;
  dates = [];
  start = [];
  correctAnswer: string;
  Answers = [];
  answer1: Answer;
  answer2: Answer;
  answer3: Answer;
  answer4: Answer;

  question: string;
  hint: string;

  ngOnInit(): void {
    this.calService.getData<Calendar>().subscribe((c) => {
      this.calendar = c;
      this.daysInMonth = this.calendar.date.daysInMonth;
      this.dates = [...Array(this.daysInMonth).keys()].map((x) => x + 1);
      this.getDay = new Date(this.calendar.date.currentMonth).getDay();
      this.start = [...Array(this.getDay).keys()];
      this.correctAnswer = this.calendar.Correct.toString();
      this.question = this.calendar.question;
      this.hint = this.calendar.hint;
      this.answer1 = {
        answer: this.calendar.Answer1,
        selectedOption: '1',
        correctAnswer: this.calendar.Correct,
        header: 'A',
      };
      this.answer2 = {
        answer: this.calendar.Answer2,
        selectedOption: '2',
        correctAnswer: this.calendar.Correct,
        header: 'B',
      };
      this.answer3 = {
        answer: this.calendar.Answer3,
        selectedOption: '3',
        correctAnswer: this.calendar.Correct,
        header: 'C',
      };
      this.answer4 = {
        answer: this.calendar.Answer4,
        selectedOption: '4',
        correctAnswer: this.calendar.Correct,
        header: 'D',
      };
      this.Answers = [
        ...this.Answers,
        this.answer1,
        this.answer2,
        this.answer3,
        this.answer4,
      ];

      console.log(this.calendar);
    });
  }

  speak() {
    speechSynthesis.speak(new SpeechSynthesisUtterance(this.calendar.question));
  }
  applyClasses(x) {
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
