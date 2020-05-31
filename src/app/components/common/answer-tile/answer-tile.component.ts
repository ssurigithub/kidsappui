import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';

@Component({
  selector: 'app-answer-tile',
  templateUrl: './answer-tile.component.html',
  styleUrls: ['./answer-tile.component.styl'],
})
export class AnswerTileComponent implements OnInit {
  constructor() {}

  @Input()
  Answer: Answer;

  @Output()
  updateRoot: EventEmitter<string> = new EventEmitter<string>();

  correctAnswer: number[];
  selectedOption: string;
  header: string;

  ngOnInit(): void {
    this.correctAnswer = this.Answer.correct;
    this.selectedOption = this.Answer.selectedOption;
    this.header = this.Answer.header;
  }

  handleUpdateParent(x: any) {
    console.log('In answer tile  component: the value emitted is ' + x);
    this.updateRoot.emit(x);
  }
}
