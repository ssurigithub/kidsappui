export class Calendar {
  category: string;
  date: CalendarDate;
  question: string;
  Answer1: string;
  Answer2: string;
  Answer3: string;
  Answer4: string;
  Correct: number;
  hint: string;
}

export class CalendarDate {
  currentMonth: string;
  date: string;
  format: string;
  currentDate: number;
  daysInMonth: number;
}
