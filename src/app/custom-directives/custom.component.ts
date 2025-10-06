import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth/auth.directive';

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective],
})
export class CustomComponent {
  private authService = inject(AuthService);

  //computed() creates a derived signal — a read-only value that automatically updates when its dependent signals change.
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
