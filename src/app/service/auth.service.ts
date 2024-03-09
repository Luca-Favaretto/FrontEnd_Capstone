import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDTO } from '../interface/user-dto';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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
    return this.http.post(this.apiUrl + 'auth/register', user);
  }
}
