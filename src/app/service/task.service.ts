import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PageResponse } from '../interface/page-response';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private authSrv: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}
  getTask(): Observable<PageResponse> {
    return this.http.get<PageResponse>(this.apiUrl + 'tasks');
  }
}
