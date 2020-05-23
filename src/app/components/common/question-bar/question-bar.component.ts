import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/Models/Question';
import { Answer } from 'src/app/Models/Answer';

@Component({
  selector: 'app-question-bar',
  templateUrl: './question-bar.component.html',
  styleUrls: ['./question-bar.component.styl'],
})
export class QuestionBarComponent implements OnInit {
  constructor() {}

  @Input()
  question: Question;
  correctAnswer: string;
  Answers = [];
  answer1: Answer;
  answer2: Answer;
  answer3: Answer;
  answer4: Answer;

  ngOnInit(): void {
    console.log(this.question);

    this.answer1 = {
      answer: this.question.answer1,
      selectedOption: '1',
      correctAnswer: this.question.correct,
      header: 'A',
    };
    this.answer2 = {
      answer: this.question.answer2,
      selectedOption: '2',
      correctAnswer: this.question.correct,
      header: 'B',
    };
    this.answer3 = {
      answer: this.question.answer3,
      selectedOption: '3',
      correctAnswer: this.question.correct,
      header: 'C',
    };
    this.answer4 = {
      answer: this.question.answer4,
      selectedOption: '4',
      correctAnswer: this.question.correct,
      header: 'D',
    };
    this.Answers = [
      ...this.Answers,
      this.answer1,
      this.answer2,
      this.answer3,
      this.answer4,
    ];
  }

  speak() {
    speechSynthesis.speak(new SpeechSynthesisUtterance(this.question.question));
  }

  utter(txt) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
  }
}
