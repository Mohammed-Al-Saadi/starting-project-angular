import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Using standalone components
bootstrapApplication(AppComponent).catch((err) => console.error(err));

// using ngModule
//platformBrowserDynamic().bootstrapModule(AppModule);
