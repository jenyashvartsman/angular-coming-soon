import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  futureDate: Date;
  loading = true;

  constructor() {
    this.setFutureDate();
  }

  ngOnInit(): void {
    setTimeout(() => this.loading = false, 2000);
  }

  setFutureDate(): void {
    const now = new Date();
    now.setDate(now.getDate() + 25);
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    this.futureDate = now;
  }
}
