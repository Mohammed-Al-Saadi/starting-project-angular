import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    class: 'status',
  },
})
// We use implements OnInit to initialize a component safely and predictably.
// ngOnInit() runs once after Angular has created the component and set its input bindings—ideal for fetching data, starting timers, or wiring subscriptions.
// Adding implements OnInit gives TypeScript type-checking: if you forget to define ngOnInit(), you’ll get a compile-time warning.
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private interval?: ReturnType<typeof setInterval>;
  // constructor() {
  //   setInterval(() => {
  //     const rand = Math.random(); // 0 to 1
  //     if (rand < 0.5) {
  //       this.currentStatus = 'online';
  //     } else if (rand < 0.9) {
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000);
  // }

  constructor() {
    // An effect() is a reactive side effect that runs automatically whenever any signal it reads changes.

    effect(() => {
      console.log(this.currentStatus());
    });
  }
  ngOnInit() {
    console.log('on init');
    this.interval = setInterval(() => {
      const rand = Math.random(); // 0 to 1
      if (rand < 0.5) {
        this.currentStatus.set('online');
      } else if (rand < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }
  ngAfterViewInit() {
    console.log('after init');
  }
  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
