import { Component, OnInit, Input } from '@angular/core';
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

  correctAnswer: number;
  selectedOption: string;
  header: string;

  ngOnInit(): void {
    console.log(this.Answer);
    this.correctAnswer = this.Answer.correctAnswer;
    this.selectedOption = this.Answer.selectedOption;
    this.header = this.Answer.header;
  }
}
