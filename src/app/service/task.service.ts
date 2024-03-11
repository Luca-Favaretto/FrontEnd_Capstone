import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
  getTask() {
    return this.http.get(this.apiUrl + 'tasks');
  }
}
