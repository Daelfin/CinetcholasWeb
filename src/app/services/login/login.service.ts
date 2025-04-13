import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  logar(usuario: string, senha: string) {
    //Validar usuario e senha?
    //Hashear a senha

    var loginPath = '/auth/login';
    var body = `{ "identifier": "${usuario}", "password": "${senha}" }`;

    return this.http.post<LoginDTO>(loginPath, body);
  }

  cadastrar(nome: string, nickname: string, email: string, senha: string) {
    var cadastroPath = '/auth/register';
    var body = `{ "full_name": ${nome}, "nickname": ${nickname}, "email": ${email}, "password": ${senha} }`;

    return this.http.post(cadastroPath, body);
  }

  alterar(
    id: string,
    nome: string,
    email: string,
    senhaAtual: string,
    novaSenha: string
  ) {
    var alteracaoPath = '/auth/users/' + id;
    var body = '{ ';

    if (nome) {
      body += `"full_name": ${nome}, `;
    }
    if (email) {
      body += `"email": ${email}, `;
    }
    if (novaSenha) {
      body += `"current_password": ${senhaAtual}, "new_password": ${novaSenha} `;
    }

    body += '}';

    return this.http.put(alteracaoPath, body);
  }
}
