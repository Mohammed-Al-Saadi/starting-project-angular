import { Injectable } from '@angular/core';
import { Calculator } from './form.model';

@Injectable({ providedIn: 'root' }) // 👈 this is required
export class FormDataService {
  private formData: Calculator | null = null;
  private getCalculation: Calculator | null = null;

  setFormData(data: Calculator) {
    this.formData = data;
  }

  getFormData(): Calculator | null {
    return this.formData;
  }
}
