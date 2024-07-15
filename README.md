# Cinetcholas Web

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Instalação

Padrão para projetos Angular:

Instalar o [Node.js](https://nodejs.org/pt)

Instalar o Angular CLI: `npm install -g @angular/cli@17`

Se for usar o Powershell: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

Rodar o comando `npm install` após baixar o repositório

## Servidor de Desenvolvimento

Use o comando `ng serve`. Navegue para `http://localhost:4200/`. A aplicação recarrega automaticamente toda vez que um arquivo é alterado.

## Build e Deploy

Na branch `angular-pages` use o comando `ng build --base-href /CinetcholasWeb/` para construir o projeto. Os artefatos ficarão na pasta `docs/`. Ao fazer push para o repositório, a página devia ser atualizada automaticamente. Verificar a aba `Actions` no github.

O ideal é que a pasta `docs/` seja enviada apenas para a branch `angular-pages`.
