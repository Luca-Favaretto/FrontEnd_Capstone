import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SnackService } from 'src/app/service/snack.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  passwordVisible: boolean = false;

  constructor(private snackSrv: SnackService, private authSrv: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  onSubmit() {
    this.authSrv.signup(this.registerForm.value).subscribe((res) => {
      this.snackSrv.openSnack(`Welcome ${res.name}`);
    });
  }
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      passwordInput.setAttribute(
        'type',
        this.passwordVisible ? 'text' : 'password'
      );
    }
  }
}
