import { Component } from '@angular/core';

import { LoginComponent } from './auth/login-template-driven/login.component';
import { LoginReactiveComponent } from './auth/login-reactive/login.component';
import { SignupComponent } from './auth/signup-reactive /signup.component';

@Component({
  selector: 'app-auth-main',
  standalone: true,
  templateUrl: './auth-main.component.html',
  imports: [LoginComponent, LoginReactiveComponent, SignupComponent],
})
export class AuthMainComponent {}
