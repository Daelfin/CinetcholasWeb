import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../../util/login.dto';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) {}
  options = {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*'),
  };

  logar(usuario: string, senha: string) {
    //Validar usuario e senha?
    //Hashear a senha

    var loginPath = environment.apiPath + 'auth/login';
    var body = `{ "identifier": "${usuario}", "password": "${senha}" }`;

    this.http
      .post<LoginDTO>(loginPath, body, this.options)
      .subscribe((retorno) => this.criarSessao(retorno));
  }

  private criarSessao(retornoLogin: LoginDTO) {
    localStorage.setItem('id_token', retornoLogin.acess_token);
    localStorage.setItem('usuario_id', retornoLogin.user_info.id);
    localStorage.setItem('usuario', retornoLogin.user_info.nickname);
    localStorage.setItem('administrador', retornoLogin.user_info.is_admin.toString());
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('usuario_id');
    localStorage.removeItem('usuario');
    localStorage.removeItem('administrador');
  }

  estaLogado(){
    if (localStorage.getItem('id_token')) 
      return true; 
    else 
      return false;
  }

  cadastrar(nome: string, nickname: string, email: string, senha: string) {
    var cadastroPath = environment.apiPath + 'auth/register';
    var body = `{ "full_name": ${nome}, "nickname": ${nickname}, "email": ${email}, "password": ${senha} }`;

    return this.http.post(cadastroPath, body, this.options);
  }

  alterar(
    id: string,
    nome: string,
    email: string,
    senhaAtual: string,
    novaSenha: string
  ) {
    var alteracaoPath = environment.apiPath + '/auth/users/' + id;
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

    return this.http.put(alteracaoPath, body, this.options);
  }
}
