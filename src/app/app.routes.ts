import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './util/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'filmes', component: FilmesComponent, canActivate: [authGuard] },
  { path: 'cadastro-filmes', component: CadastroFilmeComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
