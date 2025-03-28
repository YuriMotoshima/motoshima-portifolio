const express = require('express');
const routes = express.Router();
const data = require("./data/data_html");
const { getRepos } = require("./tools");
require('dotenv').config();

const username = process.env.user_github;
const token = process.env.token_github;

console.log("USERNAME:", process.env.user_github);
console.log("TOKEN:", process.env.token_github ? "Token encontrado" : "Token NÃO encontrado");

routes.get("/", function (req, res) {
    return res.redirect("/home");
});

routes.get('/home', async function (req, res) {
    console.log("Rendering index");

    const dataListRepos = { dataRepos: [] };

    try {
        await getRepos(username, token, dataListRepos);
    } catch (error) {
        console.error("Erro ao buscar repositórios:", error.message);
        data.dataRepos = [];  // Garante que dataRepos sempre exista
    }

    return res.render('index', {
        homeText: data.homeText,
        aboutText: data.aboutText,
        dataRepos: data.dataRepos
    });
});

module.exports = routes;
