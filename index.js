const express = require('express');
const server = express();
server.use(express.json());

const projects = [];

//Cria um novo projeto
server.post("/projects", (req, res) => 
{
    const {id, title} = req.body;
    const project = {id, title, tasks: []};
    projects.push(project);
    return res.json(project);
});

//Lista todos os projetos
server.get("/projects", (req, res) =>
{
    return res.json(projects);
});
//Altera o titulo do projeto
server.put("/projects/:id", (req, res) =>
{
    const {id} = req.params;
    const {title} = req.body;
    const project = projects.find(obj => obj.id == id);
    project.title = title
    return res.json(project);
});
server.listen(3000);