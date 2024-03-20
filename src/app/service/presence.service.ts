import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PresenceService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getPercent(): Observable<number> {
    return this.http.get<number>(this.apiUrl + 'presences/perCent');
  }
}
