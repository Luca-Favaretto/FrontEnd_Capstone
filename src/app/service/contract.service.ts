import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contract } from '../interface/user';
import { PageResponse } from '../interface/page-response';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  apiUrl: string = environment.apiUrl + 'contracts';
  constructor(private http: HttpClient) {}
  getAll(): Observable<PageResponse> {
    return this.http.get<PageResponse>(this.apiUrl);
  }

  getContractById(idContract: string): Observable<Contract> {
    return this.http.get<Contract>(`${this.apiUrl}/${idContract}`);
  }

  postContract(idUser: string, body: Partial<Contract>): Observable<Contract> {
    return this.http.post<Contract>(`${this.apiUrl}/${idUser}`, body);
  }
  putContract(
    idContract: string,
    body: Partial<Contract>
  ): Observable<Contract> {
    return this.http.put<Contract>(`${this.apiUrl}/${idContract}`, body);
  }
}
