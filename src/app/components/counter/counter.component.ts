import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  timeInterval: any;

  @Input() futureDate: Date;

  constructor() {
  }

  ngOnInit(): void {
    this.updateTime();
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  updateTime(): void {
    this.timeInterval = setInterval(() => {
      const now: Date = new Date();

      let delta = Math.abs(this.futureDate.getTime() - now.getTime()) / 1000;

      this.days = Math.floor(delta / 86400);
      delta -= this.days * 86400;

      this.hours = Math.floor(delta / 3600) % 24;
      delta -= this.hours * 3600;

      this.minutes = Math.floor(delta / 60) % 60;
      delta -= this.minutes * 60;

      this.seconds = Math.floor(delta % 60);

    }, 1000);
  }
}
