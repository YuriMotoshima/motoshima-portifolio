const express = require("express");
const path = require("path");
const routes = require("./routes");

const server = express();
const port = process.env.PORT || 3000;

// Configuração do EJS como motor de visualização
server.set("view engine", "ejs");

// Definir o diretório de views (onde estão seus arquivos .ejs)
server.set("views", path.join(__dirname, "views"));

// Servir arquivos estáticos (CSS, JS, imagens) da pasta public
server.use(express.static(path.join(__dirname, "public")));

// Usar as rotas definidas no routes.js
server.use(routes);

// Iniciar o servidor se não estiver no Cloudflare Pages (caso contrário o Vercel vai cuidar disso)
if (!process.env.CF_PAGES) {
    server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}
