import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentResult } from '../form/form.model';

@Component({
  selector: 'app-results',
  standalone: true,
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
  imports: [CommonModule],
})
export class ResultsComponent {
  @Input({ required: true }) results: InvestmentResult[] = [];
}
