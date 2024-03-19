import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../interface/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginRegeister } from '../interface/login-regeister';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  private isLoggedIn = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable() as Observable<User>;

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: Partial<User>) {
    return this.http
      .post(this.apiUrl + 'auth/register', user)
      .pipe(tap(() => this.router.navigate(['/login'])));
  }

  login(loginData: Partial<User>) {
    return this.http
      .post<LoginRegeister>(this.apiUrl + 'auth/login', loginData)
      .pipe(
        tap((res) => {
          this.isLoggedIn.next(true);
          localStorage.setItem('userToken', JSON.stringify(res));

          this.router.navigate(['']);
        })
      );
  }

  logout() {
    this.isLoggedIn.next(false);
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  verifyLogin() {
    const ls = localStorage.getItem('userToken');
    if (ls) {
      const tokenExpired = this.jwtHelper.isTokenExpired(ls);
      if (!tokenExpired) {
        this.isLoggedIn.next(true);

        this.router.createUrlTree(['']);
      } else {
        this.logout();
      }
    } else {
      this.logout();
    }
  }
}
