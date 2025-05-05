import { FormsModule } from '@angular/forms';
import { LoginService } from './../services/login/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}
  login = '';
  senha = '';

  logar() {
    this.loginService
      .logar(this.login, this.senha)
  }
}
