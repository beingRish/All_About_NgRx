import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { AppState } from 'src/app/store/app.state';
import { signupStart } from '../state/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  showEmailErrors() {
    const emailForm = this.signupForm.get('email');
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
    const passwordForm = this.signupForm.get('password');
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

  onSignupSubmit() {
    if(!this.signupForm.valid){
      return;
    }
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(setLoadingSpinner({status: true}))
    this.store.dispatch(signupStart({ email, password }))
  }
}
