import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  LoginForm: FormGroup;
  Login!: boolean;

  constructor(private fb: FormBuilder, private router: Router) {
    this.Login = false;
    this.LoginForm = this.fb.group({
      Email: ['', Validators.required],
      Code: ['', Validators.required],
    });
  }

  onSubmit() {
      console.log("login");
      this.Login = true;
      this.router.navigateByUrl('');
  }
}
