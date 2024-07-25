var apitoken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjhhNzU4ODU3OWJlZTY5ODg4M2U0ZjZiMWQwZTBlMiIsIm5iZiI6MTcyMDgxNjQyOS4zODEyMSwic3ViIjoiNjY5MTkyNzVmNjhiY2ExNTY1ZjE5ZDI2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ISYauyZwcbsKDQ0YLdGR_23pF-GjDcxTfi-g2eXXlyg"
var apikey = "3f8a7588579bee698883e4f6b1d0e0e2"

//API aberta de livros: descobrir como pegar as capas >>> https://openlibrary.org/search.json?q=rings

var gameApiKey = "34fa305c1a374289847589fecb040035"

async function buscarFilme() {
    var nomeDoFilme = document.getElementById("InputNomeDoFilme").value //Pega o nome do filme da caixa de texto
    var moviepath = "https://api.themoviedb.org/3/search/movie?query=" + nomeDoFilme + "&include_adult=false&language=pt-BR&page=1"
    var posterurl = "https://image.tmdb.org/t/p/w500/"
    const options = {
        method: "GET",
        headers: { accept: "application/json", Authorization: apitoken }
    };

    const response = await fetch(moviepath, options)
    const data = await response.json()

    document.getElementById("LabelNomeDoFilme").innerText = data["results"][0]["title"] //Seta o nome do filme
    document.getElementById("LabelDataDoFilme").innerText = data["results"][0]["release_date"].split("-")[0]
    var posterpath = data["results"][0]["poster_path"]
    const poster = posterurl + posterpath

    document.getElementById("CapaFilme").src = poster

    var descricao = data["results"][0]["overview"]
    document.getElementById("LabelDescricaoDoFilme").innerText = descricao
    console.log(data)
}

async function buscarSerie() {
    var nomeDaSerie = document.getElementById("InputNomeDoFilme").value //Pega o nome do filme da caixa de texto
    var showpath = "https://api.themoviedb.org/3/search/tv?query=" + nomeDaSerie + "&include_adult=false&language=pt-BR&page=1"
    var posterurl = "https://image.tmdb.org/t/p/w500/"
    const options = {
        method: "GET",
        headers: { accept: "application/json", Authorization: apitoken }
    };

    const response = await fetch(showpath, options)
    const data = await response.json()

    document.getElementById("LabelNomeDoFilme").innerText = data["results"][0]["name"] //Seta o nome do filme
    document.getElementById("LabelDataDoFilme").innerText = data["results"][0]["first_air_date"].split("-")[0]
    var posterpath = data["results"][0]["poster_path"]
    const poster = posterurl + posterpath

    document.getElementById("CapaFilme").src = poster

    var descricao = data["results"][0]["overview"]
    document.getElementById("LabelDescricaoDoFilme").innerText = descricao
    console.log(data)
}

async function buscarJogo() {
    var nomeDoJogo = document.getElementById("InputNomeDoFilme").value //Pega o nome do filme da caixa de texto
    var gamepath = "https://api.rawg.io/api/games?search=" + nomeDoJogo + "&key=" + gameApiKey
    gamepath = gamepath.replace(" ","%20")
    const options = {
        method: "GET",
        headers: { accept: "application/json"}
    };

    const response = await fetch(gamepath)
    const data = await response.json()

    document.getElementById("LabelNomeDoFilme").innerText = data["results"][0]["name"] //Seta o nome do filme
    document.getElementById("LabelDataDoFilme").innerText = data["results"][0]["released"].split("-")[0]
    var posterpath = data["results"][0]["background_image"]

    document.getElementById("CapaFilme").src = posterpath

    document.getElementById("LabelDescricaoDoFilme").innerText = "Nessa api, jogo nao tem descrição"
    console.log(data)
}