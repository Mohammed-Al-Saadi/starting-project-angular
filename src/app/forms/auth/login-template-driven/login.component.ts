import { afterNextRender, Component, DestroyRef, inject, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {

private form = viewChild.required<NgForm>('loginForm')
private destroyRef= inject(DestroyRef);

constructor(){

  afterNextRender( () => {
  const savedFormValues = window.localStorage.getItem('loginFormValues');
  if (savedFormValues) {
    const loadedData = JSON.parse(savedFormValues);
    const savedEmail = loadedData.email;
    setTimeout( () => {
      this.form().controls['email'].setValue(savedEmail);
    },1);
  }

   const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe(  {
      next: (value) => {
        window.localStorage.setItem('loginFormValues', JSON.stringify({email: value.email}));
      }
    });
    this.destroyRef.onDestroy( () => {
      subscription?.unsubscribe();
    }); 
  });
}

  onSubmit(form: NgForm){
    if (!form.form.valid){
      return;
    }
    const enteredEmail = form.value.email;
    const enteredPassword = form.value.password;
    console.log(form.form);
    
    console.log(enteredEmail, enteredPassword);
    form.reset();
  }

}
