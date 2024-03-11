import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDTO } from '../interface/user-dto';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginRegeisterDto } from '../interface/login-regeister-dto';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  private $isLoggedIn = new BehaviorSubject(false);
  isLoggedIn = this.$isLoggedIn.asObservable();
  private $user = new BehaviorSubject<Partial<UserDTO> | null>(null);
  user = this.$user.asObservable() as Observable<UserDTO>;

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: Partial<UserDTO>) {
    return this.http
      .post(this.apiUrl + 'auth/register', user)
      .pipe(tap(() => this.router.navigate(['/login'])));
  }

  login(loginData: Partial<UserDTO>) {
    console.log('Login Data:', loginData);
    return this.http
      .post<LoginRegeisterDto>(this.apiUrl + 'auth/login', loginData)
      .pipe(
        tap((res) => {
          this.$isLoggedIn.next(true);
          localStorage.setItem('userToken', JSON.stringify(res));
          this.router.navigate(['/home']);
        })
      );
  }

  logout() {
    this.$isLoggedIn.next(false);
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  verifyLogin() {
    const ls = localStorage.getItem('userToken');
    if (ls) {
      const tokenExpired = this.jwtHelper.isTokenExpired(ls);
      if (!tokenExpired) {
        this.$isLoggedIn.next(true);
        this.router.navigate(['home']);
      } else {
        this.logout();
      }
    } else {
      this.logout();
    }
  }
}
