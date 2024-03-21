import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageResponse } from '../interface/page-response';

@Injectable({
  providedIn: 'root',
})
export class InternalCourseService {
  apiUrl: string = environment.apiUrl + 'internalCourses';
  constructor(private http: HttpClient) {}

  getCourses(): Observable<PageResponse> {
    return this.http.get<PageResponse>(this.apiUrl);
  }
  getMyCourse(): Observable<PageResponse> {
    return this.http.get<PageResponse>(this.apiUrl + '/me');
  }
}
