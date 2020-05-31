import { Question } from './Question';

export class MissingNumber {
  category: string;
  data: MissingNumberOption[];
  question: Question;
}

export class MissingNumberOption {
  n: number;
  answer: number;
  hidden: boolean;
  index: number;
}
