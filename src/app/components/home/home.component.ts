import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/common/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Calendar } from 'src/app/Models/calendar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.navigateByUrl('/dates/calendar');
  }
}
