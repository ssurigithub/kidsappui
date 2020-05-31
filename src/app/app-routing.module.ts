import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/dates/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { MissingComponent } from './components/numbers/missing/missing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dates/calendar',
    component: CalendarComponent,
  },
  {
    path: 'numbers/missing',
    component: MissingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
