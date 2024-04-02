import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageResponse } from '../interface/page-response';
import { environment } from 'src/environments/environment';
import { Result } from '../interface/result';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private sharedResult = new BehaviorSubject<Result | null>(null);
  sharedResult$ = this.sharedResult.asObservable();

  apiUrl: string = environment.apiUrl + 'results';
  constructor(private http: HttpClient) {}

  updateSharedData(data: Result) {
    this.sharedResult.next(data);
  }

  getResults(): Observable<PageResponse> {
    return this.http.get<PageResponse>(this.apiUrl);
  }
  getMyResults(): Observable<PageResponse> {
    return this.http.get<PageResponse>(this.apiUrl + '/me');
  }
}
