import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDataService } from './form.service';
import { Calculator } from './form.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() calculate = new EventEmitter();
  enteredInitial = '0';
  enteredAnnual = '0';
  enteredExpected = '0';
  enteredDuration = '0';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitial,
      annualInvestment: +this.enteredAnnual,
      expectedReturn: +this.enteredExpected,
      duration: +this.enteredDuration,
    });
    this.enteredAnnual = '0';
    this.enteredInitial = '0';
    this.enteredExpected = '0';
    this.enteredDuration = '0';

    //using service
    //private calculatorData = inject(FormDataService);
    // onSubmit() {
    //   const data: Calculator = {
    //     initialInvestment: +this.enteredInitial,
    //     annualInvestment: +this.enteredAnnual,
    //     expectedReturn: +this.enteredExpected,
    //     duration: +this.enteredDuration,
    //   };

    //   this.calculatorData.setFormData(data);
    // }
  }
}
