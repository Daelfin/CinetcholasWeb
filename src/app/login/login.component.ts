import { FormsModule } from '@angular/forms';
import { LoginService } from './../services/login/login.service';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (private loginService: LoginService) {}
  login = "";
  senha = "";


  logar() {
    this. loginService
    .logar(this.login, this.senha)
    .subscribe()
  }

  cadastro(){

  }
}
