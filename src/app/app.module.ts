import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/_layout/header/header.component';
import { CalendarComponent } from './components/dates/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { ValidateResponseDirective } from './directives/validate-response.directive';
import { QuestionBarComponent } from './components/common/question-bar/question-bar.component';
import { AnswerTileComponent } from './components/common/answer-tile/answer-tile.component';
import { MissingComponent } from './components/numbers/missing/missing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    HomeComponent,
    ValidateResponseDirective,
    QuestionBarComponent,
    AnswerTileComponent,
    MissingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
