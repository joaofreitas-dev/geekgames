const routes = require("express").Router();
const JogoController = require("../controllers/JogoControllers")

routes.get("/", JogoController.getAll);
routes.get("/jogos/:id", JogoController.getById);
routes.get("/cadastro", JogoController.cadastro);
routes.post("/cadastroAdd", JogoController.cadastroAdd);
routes.get("/editar/:id", JogoController.editar1);
routes.post("/editar/:id", JogoController.editar);
routes.post("/delete/:id", JogoController.deletar)
routes.get("/delete/:id", JogoController.deletar1)


module.exports = routes;
