import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-bar',
  templateUrl: './question-bar.component.html',
  styleUrls: ['./question-bar.component.styl'],
})
export class QuestionBarComponent implements OnInit {
  constructor() {}

  @Input()
  question: string;

  @Input()
  hint: string;

  ngOnInit(): void {
    console.log(this.question);
    console.log(this.hint);
  }

  speak() {
    speechSynthesis.speak(new SpeechSynthesisUtterance(this.question));
  }

  utter(txt) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
  }
}
