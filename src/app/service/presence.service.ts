import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Presence } from '../interface/presence';
import { PageResponse } from '../interface/page-response';

@Injectable({
  providedIn: 'root',
})
export class PresenceService {
  apiUrl: string = environment.apiUrl + 'presences';
  constructor(private http: HttpClient) {}

  getPercent(): Observable<number> {
    return this.http.get<number>(this.apiUrl + '/perCent');
  }
  getMyPresence(): Observable<PageResponse> {
    return this.http.get<PageResponse>(this.apiUrl + '/me');
  }
  existNow(): Observable<boolean> {
    return this.http.get<boolean>(this.apiUrl + '/exist');
  }
  existFinishNow(): Observable<boolean> {
    return this.http.get<boolean>(this.apiUrl + '/existFinish');
  }
  getNow(): Observable<Presence> {
    return this.http.get<Presence>(this.apiUrl + '/now');
  }
  postStartNow(): Observable<Presence> {
    return this.http.post<Presence>(this.apiUrl + '/start', null);
  }
  postFinishNow(id: string): Observable<Presence> {
    return this.http.post<Presence>(`${this.apiUrl}/finish/${id}`, null);
  }
  postAbstinence(body: {
    date: string;
    abstinenceStatus: any;
  }): Observable<Presence> {
    return this.http.post<Presence>(`${this.apiUrl}/abstinence`, body);
  }
}
