import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  templateUrl: './custom-pipe.component.html',
  styleUrl: './styles.css',

  imports: [DatePipe, TemperaturePipe],
})
export class CustomPipeComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };
}
