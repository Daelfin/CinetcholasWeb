import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'filmes', component: FilmesComponent},
    {path: 'cadastro-filmes', component: CadastroFilmeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
];
