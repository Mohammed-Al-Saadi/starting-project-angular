import { afterNextRender, Component, DestroyRef, inject, OnInit, viewChild, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function containQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }
  return { doesNotContainQuestionMark: true };
}

function emailIsUniqe (control: AbstractControl){
  if ( control.value !== "test@example.com"){
    return of(null)
  }
return of ({notUniqe : true})
}
@Component({
  selector: 'app-login-reactive',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule]
})
export class LoginReactiveComponent implements OnInit {
private destroyRef = inject(DestroyRef)
form = new FormGroup({
  email : new FormControl('',{
  validators: [Validators.required, Validators.email],
  asyncValidators:[emailIsUniqe]}),
  password : new FormControl('', {
  validators: [Validators.required, containQuestionMark, Validators.minLength(6)]})  ,
});
ngOnInit() {
const savedForm = window.localStorage.getItem("reactive_form")
if (savedForm){
  const loadedForm = JSON.parse(savedForm)
    this.form.patchValue({
        email: loadedForm.email
      })  

}
  const subs =this.form.valueChanges.pipe(debounceTime(500)).subscribe({
    next: (value) => {
      window.localStorage.setItem(
      "reactive_form",
      JSON.stringify({email: value.email})
    );},
    
  });
  this.destroyRef.onDestroy(()=> subs.unsubscribe())
}
onSubmit(){
if (this.form.invalid){
   return;
}
console.log(this.form);
const enteredEmail = this.form.value.email;
const enteredPassword = this.form.value.password;
console.log(enteredEmail, enteredPassword);
this.form.reset();

}
get email(){
  return this.form.controls['email'].touched &&
    this.form.controls['email'].dirty && this.form.controls['email'].invalid;
}
get password(){
  return this.form.controls['password'].touched &&
    this.form.controls['password'].dirty && this.form.controls['password'].invalid;
}
}