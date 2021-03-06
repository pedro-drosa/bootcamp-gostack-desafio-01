const express = require('express');
const server = express();
server.use(express.json());

const projects = [];

//Verifica se um projeto existe
function projectVerify(req, res, next)
{
    const {id} = req.params;
    const project = projects.find(obj => obj.id == id);
    if (! project) {
        return res.status(400).json({error: "Project not found"});
    }
    return next();
}

//log Numero de requisições
server.use((req, res, next) => 
{
    console.count("Number of requests");
    return next();
});

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
server.put("/projects/:id", projectVerify, (req, res) =>
{
    const {id} = req.params;
    const {title} = req.body;
    const project = projects.find(obj => obj.id == id);
    project.title = title
    return res.json(project);
});

//Deleta um projeto
server.delete("/projects/:id", (req, res)=>
{
    const {id} = req.params;
    const index = projects.findIndex(obj => obj.id == id);
    projects.splice(index, 1);
    return res.send();
});

//Adiciona uma nova tarefa
server.post("/projects/:id/tasks", (req, res) =>
{
    const {id} = req.params
    const {title} = req.body;
    const project = projects.find(obj=> obj.id == id);
    project.tasks.push(title);
    return res.json(project);
});

server.listen(3000);