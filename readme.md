#Desafio 1: Conceitos do NodeJS
## Objetivo - Sobre o desafio
* Criar uma aplicação para armazenar projetos e tarefas utilizando [Express](https://expressjs.com/pt-br/).

### Rotas
- `POST /projects` : Cadastra um novo projeto

- `GET /projects` : Rota que lista todos projetos e tarefas;

- `PUT /projects/:id` : Altera um projeto através do `:id` informado.

- `DELETE /projects/:id` : Deleta um projeto através do `:id` informado.

- `POST /projects/:id/tasks` : Adiciona uma nova tarefa a um projeto através do `:id` informado.