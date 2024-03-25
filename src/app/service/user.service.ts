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
  complateTask(idTask: string) {
    return this.http.post(`${this.apiUrl}/completeTask/${idTask}`, null);
  }
  addCourse(idCourse: string) {
    return this.http.patch(`${this.apiUrl}/addMeCourse/${idCourse}`, null);
  }
  complateCourse(idCourse: string) {
    return this.http.post(`${this.apiUrl}/completeCourse/${idCourse}`, null);
  }
  getAll(): Observable<PageResponse> {
    return this.http.get<PageResponse>(this.apiUrl);
  }
  modRatig(idUser: string, value: number): Observable<User> {
    const body = { value: value };
    return this.http.patch<User>(`${this.apiUrl}/modRating/${idUser}`, body);
  }
}
