import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PageResponse } from '../interface/page-response';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = environment.apiUrl + 'users';
  constructor(private http: HttpClient) {}

  getMe(): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/me');
  }

  updateMe(user: Partial<User>): Observable<User> {
    return this.http.put<User>(this.apiUrl + '/me', user);
  }
}
