import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public cadastroPaciente(value: any) {
    return this.http.post<any>(`${environment.api_url}cadastroPaciente`, value);

  }

  public cadastroProfissional(value: any) {
    return this.http.post<any>(`${environment.api_url}cadastroProfissional`, value);
  }

  public login(value: any) {
    return this.http.post<any>(`${environment.api_url}login`, value);
  }
}
