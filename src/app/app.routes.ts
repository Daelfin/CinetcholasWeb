import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'filmes', component: FilmesComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
];
