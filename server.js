const express = require("express");
const routes = require("./routes");
const server = express();
const port = process.env.PORT || 3000;

server.use(express.static("public"));

server.use(routes);

// Configuração do motor de visualização
server.set("view engine", "ejs");

// Configuração para onde estão localizadas as views
server.set("views", "views");

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));