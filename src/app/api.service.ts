import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public cadastroPaciente(value: any) {
    return this.http.post<any>('cadastroPaciente', value);

  }

  public cadastroProfissional(value: any) {
    return "http://localhost:3000/cadastroProfissional"
  }

  public login() {
    return "http://localhost:3000/login"
  }
}
