import { ConsultaAPIService } from './../services/consulta-api/consulta-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ConsultaAPIService],
  templateUrl: `./home.component.html`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  inputNomeDoFilme: string = '';
  labelNomeDoFilme: string = 'pixel';
  labelDataDoFilme: string = '';
  labelDescricaoDoFilme: string = '';
  srcImagem: string = '';

  ngOnInit(): void {
    console.log('eh nois');
  }

  constructor(private consultaAPIService: ConsultaAPIService) {}

  buscarFilme() {
    this.consultaAPIService
      .buscarFilme(this.inputNomeDoFilme)
      .subscribe((response) => this.preencherFilme(response));
  }

  preencherFilme(data: any) {
    var posterurl = 'https://image.tmdb.org/t/p/w500/';
    this.labelNomeDoFilme = data.results[0].title; //Seta o nome do filme
    this.labelDataDoFilme = data.results[0].release_date.split('-')[0];
    var posterpath = data.results[0].poster_path;
    var poster = posterurl + posterpath;

    this.srcImagem = poster;

    var descricao = data.results[0].overview;
    this.labelDescricaoDoFilme = descricao;
  }

  buscarSerie() {
    this.consultaAPIService
      .buscarSerie(this.inputNomeDoFilme)
      .subscribe((response) => this.preencherSerie(response));
  }

  preencherSerie(data: any) {
    var posterurl = 'https://image.tmdb.org/t/p/w500/';
    this.labelNomeDoFilme = data['results'][0]['name']; //Seta o nome do filme
    this.labelDataDoFilme = data['results'][0]['first_air_date'].split('-')[0];
    var posterpath = data.results[0].poster_path;
    var poster = posterurl + posterpath;
    this.srcImagem = poster;
    var descricao = data.results[0].overview;
    this.labelDescricaoDoFilme = descricao;
  }

  buscarJogo() {
    this.consultaAPIService
      .buscarJogo(this.inputNomeDoFilme)
      .subscribe((response) => this.preencherJogo(response));
  }

  preencherJogo(data: any) {
    this.labelNomeDoFilme = data.results[0].name;
    this.labelDataDoFilme = data['results'][0]['released'].split('-')[0];
    var posterpath = data['results'][0]['background_image'];
    this.srcImagem = posterpath;
    this.labelDescricaoDoFilme = 'Nessa api, jogo nao tem descrição';
  }
}
