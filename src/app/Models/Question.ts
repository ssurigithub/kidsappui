import { Answer } from './Answer';

export class Question {
  question: string;

  answers: Answer[];
  correct: number[];
  hint: string;
}
