import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public cadastroPaciente(value: any){
    return "http://localhost:3000/cadastroPaciente"

  }

  public cadastroProfissional(value: any){
    return "http://localhost:3000/cadastroProfissional"
  }

  public login(){
    return "http://localhost:3000/login"
  }
}
