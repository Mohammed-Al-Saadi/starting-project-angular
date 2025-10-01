import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-lifecycle-main',
  standalone: true,
  templateUrl: './lifecycle-main.component.html',
  styleUrls: ['./lifecycle-main.component.css'],
  imports: [NgFor, LifecycleComponent, HeaderComponent],
})
export class LifecycleMAinComponent {
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  lifecycleLogs: string[] = [];

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;

    if (this.lifecycleComponentIsVisible) {
      // Clear logs every time you re-create the lifecycle component
      this.lifecycleLogs = [];
      this.lifecycleLogs.push('CONSTRUCTOR'); // optional: show constructor immediately
    }
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }

  onLogReceived(log: string) {
    this.lifecycleLogs.push(log);
  }
}
