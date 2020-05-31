import { Component, OnInit } from '@angular/core';
import { MissingService } from 'src/app/services/numbers/missing.service';
import { Question } from 'src/app/Models/Question';
import { MissingNumber } from 'src/app/Models/MissingNumber';

@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.styl'],
})
export class MissingComponent implements OnInit {
  constructor(private missingService: MissingService) {}

  question: Question;
  missingNumbers: MissingNumber;

  ngOnInit(): void {
    console.log('inside missing init');
    this.missingService.getData<MissingNumber>().subscribe((m) => {
      console.log(m);
      this.missingNumbers = m;
      this.question = this.missingNumbers.question;
      this.question.answers.map((m) => {
        m.correct = this.question.correct;
        return m;
      });
    });
  }

  updateRootFromParent(x: string) {
    console.log('inside missing component: the value of x is ' + x);
    // get the index of the array and update that with a new item.

    let selectedAnswer = this.missingNumbers.question.answers.find(
      (a) => a.selectedOption == x
    );
    let index = this.missingNumbers.data.findIndex(
      (d) => d.answer == parseInt(selectedAnswer.answer)
    );
    let item = this.missingNumbers.data[index];
    item.hidden = false;
    item.answer = parseInt(selectedAnswer.answer);
    item.n = parseInt(selectedAnswer.answer);
    console.log(item);
  }
}
