import { Component, signal } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';
import { HeaderComponent } from './header/header.component';
import { Calculator, InvestmentResult } from './form/form.model';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormComponent, ResultsComponent, HeaderComponent],
  templateUrl: './calculator-main.component.html',
  styleUrl: './calculator-main.component.css',
})
export class CalculatorComponent {
  resultsData = signal<
    | {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[]
    | undefined
  >(undefined);

  onCalculateInvestmentResults(data: Calculator) {
    const { initialInvestment, duration, annualInvestment, expectedReturn } =
      data;
    const annualData: InvestmentResult[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment,
        totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultsData.set(annualData);
  }
}
