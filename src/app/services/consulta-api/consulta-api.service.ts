import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jsonData from './Passkeys.json';

@Injectable()
export class ConsultaAPIService {
  constructor(private http: HttpClient) {}

  private apitoken: string = jsonData.MovieApiToken;
  private apikey: string = jsonData.MovieApiKey;
  private gameApiKey: string = jsonData.GameApiKey;

  buscarFilme(filme: string) {
    var options = {
      headers: { accept: 'application/json', Authorization: this.apitoken },
    };

    var moviePath = `https://api.themoviedb.org/3/search/movie?query=${filme}&include_adult=false&language=pt-BR&page=1`;

    return this.http.get(moviePath, options);
  }

  buscarSerie(serie: string) {
    var options = {
      headers: { accept: 'application/json', Authorization: this.apitoken },
    };

    var showpath = `https://api.themoviedb.org/3/search/tv?query=${serie}&include_adult=false&language=pt-BR&page=1`;

    return this.http.get(showpath, options);
  }

  buscarJogo(jogo: string) {
    var gamepath = `https://api.rawg.io/api/games?search=${jogo}&key=${this.gameApiKey}`;
    gamepath = gamepath.replace(' ', '%20');

    var options = {
      headers: { accept: 'application/json' },
    };

    return this.http.get(gamepath, options);
  }
}
