export class ServiceRoutes {
  dates = [
    '/api/dates/today/date',
    '/api/dates/tomorrow/date',
    '/api/dates/yesterday/date',
    '/api/dates/today/day',
    '/api/dates/tomorrow/day',
    '/api/dates/yesterday/day',
    '/api/dates/month/current',
    '/api/dates/month/prev',
    '/api/dates/month/next',
    '/api/dates/year/current',
    '/api/dates/year/prev',
    '/api/dates/year/next',
  ];
  numbers = [
    '/api/numbers/missing/1',
    '/api/numbers/missing/10',
    '/api/numbers/missing/5',
    '/api/numbers/missing/2',
    '/api/numbers/missing/3',
    '/api/numbers/big',
    '/api/numbers/small',
    '/api/numbers/position',
    '/api/numbers/after/5',
    '/api/numbers/before/5',
    '/api/numbers/after/3',
    '/api/numbers/before/3',
  ];
}

export enum RouteCategory {
  Dates,
  Numbers,
}

export class RoutePath {
  path: string;
  category: RouteCategory;
  level: SkillLevel;
}

export enum SkillLevel {
  LevelOne,
  LevelTwo,
}
