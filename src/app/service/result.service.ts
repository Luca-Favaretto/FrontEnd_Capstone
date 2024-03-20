import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageResponse } from '../interface/page-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  apiUrl: string = environment.apiUrl + 'results';
  constructor(private http: HttpClient) {}

  getResults(): Observable<PageResponse> {
    return this.http.get<PageResponse>(this.apiUrl);
  }
}
