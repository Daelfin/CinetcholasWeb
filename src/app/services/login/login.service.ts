import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  logar (usuario: string, senha: string){
    //Validar usuario e senha?
    //Hashear a senha

    var loginPath = "/auth/login"
    var body = `{ "identifier": "${usuario}", "password": "${senha}" }`

    return this.http.post(loginPath, body)
  }
}
