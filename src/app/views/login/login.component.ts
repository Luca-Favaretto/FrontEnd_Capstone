import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  passwordVisible: boolean = false;
  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    this.authSrv.login(form.value).subscribe();
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
