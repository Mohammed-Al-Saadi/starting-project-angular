import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function equalValues(controlNamw1: string, controlNamw2: string) {
  return (control: AbstractControl) => {
    const val1 = control.get(controlNamw1)?.value;
    const val2 = control.get(controlNamw2)?.value;
    if (val1 === val2) {
      return null;
    }
    return { passwordIsNotTrue: true };
  };
}
@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule],
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),

    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
        conformPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      { validators: [equalValues('password', 'conformPassword')] }
    ),

    firstName: new FormControl('', {
      validators: [Validators.required],
    }),
    lastNAme: new FormControl('', {
      validators: [Validators.required],
    }),
    address: new FormGroup({
      street: new FormControl('', {
        validators: [Validators.required],
      }),
      number: new FormControl('', {
        validators: [Validators.required],
      }),
      postalCode: new FormControl('', {
        validators: [Validators.required],
      }),
      city: new FormControl('', {
        validators: [Validators.required],
      }),
    }),
    source: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    role: new FormControl<
      'student' | 'teacher' | 'employee' | 'founder' | 'other'
    >('student', { validators: [Validators.required] }),
    agree: new FormControl(false, {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form);
  }
}
