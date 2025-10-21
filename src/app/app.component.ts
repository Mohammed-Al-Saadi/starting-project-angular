import { Component } from '@angular/core';
import { MainTasksComponent } from './TasksApp/main-tasks.component';
import { CalculatorComponent } from './InvestmentCalculator/calculator-main.component';
import { LifecycleMAinComponent } from './hooksLifecycle/lifecycle-main.component';
import { DummyComponent } from './dummy/dummy.component';
import { RectMainComponent } from './rectApp/rect-main.component';
import { CustomComponent } from './custom-directives/custom.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { AuthMainComponent } from './forms/auth-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainTasksComponent,
    CalculatorComponent,
    LifecycleMAinComponent,
    DummyComponent,
    RectMainComponent,
    CustomComponent,
    CustomPipeComponent,
    AuthMainComponent,
  ],
  template: `
    <div class="switcher">
      <button (click)="activeApp = 'tasks'">Tasks Management App</button>
      <button (click)="activeApp = 'calculator'">
        Investment Calculator App
      </button>
      <button (click)="activeApp = 'forms'">Forms Demo App</button>

      <button (click)="activeApp = 'dummy'">Dummy Demo App</button>
      <button (click)="activeApp = 'rect'">Custom 2Way binding</button>
      <button (click)="activeApp = 'customDirective'">
        Custome directives
      </button>
      <!-- <button (click)="activeApp = 'customPipe'">Custom Pipe</button> -->

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
    } @else if (activeApp === 'rect') {
    <app-rect-main></app-rect-main>
    } @else if (activeApp === 'forms') {
    <app-auth-main></app-auth-main>
    } @else if (activeApp === 'customDirective') {
    <app-custom-directive></app-custom-directive>
    }
    <!-- @else if (activeApp === 'customPipe') {
      <app-custom-pipe></app-custom-pipe>
    } -->
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeApp:
    | 'tasks'
    | 'calculator'
    | 'lifecycle'
    | 'dummy'
    | 'rect'
    | 'customPipe'
    | 'customDirective'
    | 'forms' = 'tasks';
}
