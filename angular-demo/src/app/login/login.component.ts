import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { delay, map, of } from 'rxjs';


export function forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
  const forbidden = /admin/.test(control.value);
  return forbidden ? { forbiddenName: { value: control.value } } : null;
}

export function uniqueNameValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return of(control.value === 'takens').pipe(
      delay(100),
      map(isTaken => isTaken ? { nonUnique: true } : null)
    );
  };

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, forbiddenNameValidator]],
      password: ['', [Validators.required, Validators.minLength(6)], [uniqueNameValidator()]]
    });
  }

  ngOnInit(): void {
    // this.loginForm.valueChanges.subscribe(val => {
    //   console.log("Form changes: ", val);
    // });

    // this.loginForm.get('email')?.valueChanges.subscribe(val => {
    //   console.log("Email changed: ", val);
    // })

    this.loginForm.valueChanges
      .pipe(map(form => ({
        ...form,
        email: form.email.toUpperCase()
      })))
      .subscribe(updatedForm => {
        console.log(updatedForm);
      });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('login data==>>', this.loginForm.value)
    }

  }

  onReset() {
    this.loginForm.reset();
  }

  onSetValue() {

    this.loginForm.setValue({
      email: 'aaa@gmail.com',
      password: '123456'
    });
  }

  onPatchValue() {
    this.loginForm.patchValue({
      email: 'test@gmail.com'
    });
  }
}
