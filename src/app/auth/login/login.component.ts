import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  showEmailErrors() {
    const emailForm = this.loginForm.get('name');
    if(emailForm?.touched && !emailForm.valid) {
      if(emailForm.errors?.['required']) {
        return 'Email is required';
      }
      if(emailForm?.errors?.['email']){
        return 'Email is not valid';
      }
    }
    return
  }


  showPasswordErrors() {
    const passwordForm = this.loginForm.get('password');
    if(passwordForm?.touched && !passwordForm.valid) {
      if(passwordForm.errors?.['required']) {
        return 'Password is required';
      }
      if(passwordForm?.errors?.['minlength']){
        return 'Password should be of minimum 6 characters length';
      }
    }
    return
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(loginStart({ email, password }))
  }
}
