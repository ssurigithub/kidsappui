import { Question } from './Question';

export class Calendar {
  category: string;
  date: CalendarDate;
  question: Question;
}

export class CalendarDate {
  currentMonth: string;
  date: string;
  format: string;
  currentDate: number;
  daysInMonth: number;
}
