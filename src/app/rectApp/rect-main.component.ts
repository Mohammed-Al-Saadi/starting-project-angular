import { Component } from '@angular/core';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rect-main',
  standalone: true,
  templateUrl: './rect-main.component.html',
  styleUrl: './rect-main.component.css',
  imports: [RectComponent, FormsModule],
})
export class RectMainComponent {
  rectSize = {
    width: '100',
    height: '100',
  };
}
