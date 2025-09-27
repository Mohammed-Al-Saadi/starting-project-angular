import { Component } from '@angular/core';
import { MainTasksComponent } from './TasksApp/main-tasks.component';
import { CalculatorComponent } from './InvestmentCalculator/calculator-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainTasksComponent, CalculatorComponent],
  template: `
    <div class="switcher">
      <button (click)="showMain = true">Tasks Management App</button>

      <button (click)="showMain = false">Investment Calculator App</button>
    </div>

    @if (!showMain) {
      <app-calculator></app-calculator>
    } @else {
      <app-main-tasks></app-main-tasks>
    }
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMain = true;
}
