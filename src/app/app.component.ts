import { Component } from '@angular/core';
import { MainTasksComponent } from './TasksApp/main-tasks.component';
import { CalculatorComponent } from './InvestmentCalculator/calculator-main.component';
import { LifecycleMAinComponent } from './hooksLifecycle/lifecycle-main.component';
import { DummyComponent } from './dummy/dummy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainTasksComponent,
    CalculatorComponent,
    LifecycleMAinComponent,
    DummyComponent,
  ],
  template: `
    <div class="switcher">
      <button (click)="activeApp = 'tasks'">Tasks Management App</button>
      <button (click)="activeApp = 'calculator'">
        Investment Calculator App
      </button>
      <button (click)="activeApp = 'dummy'">Dummy Demo App</button>

      <button (click)="activeApp = 'lifecycle'">Lifecycle Demo App</button>
    </div>

    @if (activeApp === 'tasks') {
      <app-main-tasks></app-main-tasks>
    } @else if (activeApp === 'calculator') {
      <app-calculator></app-calculator>
    } @else if (activeApp === 'lifecycle') {
      <app-lifecycle-main></app-lifecycle-main>
    } @else if (activeApp === 'dummy') {
      <app-dummy></app-dummy>
    }
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // useing a string to track which app to show
  activeApp: 'tasks' | 'calculator' | 'lifecycle' | 'dummy' = 'tasks';
}
