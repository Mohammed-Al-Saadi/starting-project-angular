import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';
// Structural directive
@Directive({
  // Directive name used in template
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  // Define a required input  with alias 'appAuth'
  userType = input.required<Permission>({ alias: 'appAuth' });

  // Inject AuthService to access current user's permission
  private authService = inject(AuthService);

  // TemplateRef gives access to the HTML template the directive wraps
  private templateRef = inject(TemplateRef);

  // ViewContainerRef is where the directive can insert or remove the template
  private viewContainerREf = inject(ViewContainerRef);

  constructor() {
    // effect() runs automatically when any reactive signal used inside it changes
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.viewContainerREf.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerREf.clear();
      }
    });
  }
}
