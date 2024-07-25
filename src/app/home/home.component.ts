import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import jsonData from "./Passkeys.json"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./home.component.html`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  
  apitoken:string = jsonData.MovieApiToken
  apikey:string = jsonData.MovieApiKey
  gameApiKey:string = jsonData.GameApiKey

  inputNomeDoFilme:string = ""
  labelNomeDoFilme:string = ""
  labelDataDoFilme:string = ""
  labelDescricaoDoFilme:string = ""

  ngOnInit(): void {
    console.log("eh nois");
  } 

  buscarFilme(): void{
    console.log(this.inputNomeDoFilme)
  }

  //API aberta de livros: descobrir como pegar as capas >>> https://openlibrary.org/search.json?q=rings

  // async buscarFilme() {
  //     moviepath = `https://api.themoviedb.org/3/search/movie?query=${this.inputNomeDoFilme}&include_adult=false&language=pt-BR&page=1`
  //     var posterurl = "https://image.tmdb.org/t/p/w500/"
  //     const options = {
  //         method: "GET",
  //         headers: { accept: "application/json", Authorization: apitoken }
  //     };

  //     const response = await fetch(moviepath, options)
  //     const data = await response.json()

  //     document.getElementById("LabelNomeDoFilme").innerText = data["results"][0]["title"] //Seta o nome do filme
  //     document.getElementById("LabelDataDoFilme").innerText = data["results"][0]["release_date"].split("-")[0]
  //     var posterpath = data["results"][0]["poster_path"]
  //     const poster = posterurl + posterpath

  //     document.getElementById("CapaFilme").src = poster

  //     var descricao = data["results"][0]["overview"]
  //     document.getElementById("LabelDescricaoDoFilme").innerText = descricao
  //     console.log(data)
  // }

  // async buscarSerie() {
  //     var nomeDaSerie = document.getElementById("InputNomeDoFilme").value //Pega o nome do filme da caixa de texto
  //     var showpath = "https://api.themoviedb.org/3/search/tv?query=" + nomeDaSerie + "&include_adult=false&language=pt-BR&page=1"
  //     var posterurl = "https://image.tmdb.org/t/p/w500/"
  //     const options = {
  //         method: "GET",
  //         headers: { accept: "application/json", Authorization: apitoken }
  //     };

  //     const response = await fetch(showpath, options)
  //     const data = await response.json()

  //     document.getElementById("LabelNomeDoFilme").innerText = data["results"][0]["name"] //Seta o nome do filme
  //     document.getElementById("LabelDataDoFilme").innerText = data["results"][0]["first_air_date"].split("-")[0]
  //     var posterpath = data["results"][0]["poster_path"]
  //     const poster = posterurl + posterpath

  //     document.getElementById("CapaFilme").src = poster

  //     var descricao = data["results"][0]["overview"]
  //     document.getElementById("LabelDescricaoDoFilme").innerText = descricao
  //     console.log(data)
  // }

  // async buscarJogo() {
  //     var nomeDoJogo = document.getElementById("InputNomeDoFilme").value //Pega o nome do filme da caixa de texto
  //     var gamepath = "https://api.rawg.io/api/games?search=" + nomeDoJogo + "&key=" + gameApiKey
  //     gamepath = gamepath.replace(" ","%20")
  //     const options = {
  //         method: "GET",
  //         headers: { accept: "application/json"}
  //     };

  //     const response = await fetch(gamepath)
  //     const data = await response.json()

  //     document.getElementById("LabelNomeDoFilme").innerText = data["results"][0]["name"] //Seta o nome do filme
  //     document.getElementById("LabelDataDoFilme").innerText = data["results"][0]["released"].split("-")[0]
  //     var posterpath = data["results"][0]["background_image"]

  //     document.getElementById("CapaFilme").src = posterpath

  //     document.getElementById("LabelDescricaoDoFilme").innerText = "Nessa api, jogo nao tem descrição"
  //     console.log(data)
  // }

}
