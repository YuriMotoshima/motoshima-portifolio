const express = require('express');
const routes = express.Router();
const data = require("./data/data_html");
const { getRepos } = require("./tools");
require('dotenv').config();

const username = process.env.user_github;
const token = process.env.token_github;

routes.get("/", function (req, res) {
    return res.redirect("/home");
});

routes.get('/home', async function (req, res) {
    console.log("Rendering index");

    const dataListRepos = { dataRepos: [] };

    try {
        await getRepos(username, token, dataListRepos);

        if (dataListRepos.dataRepos && dataListRepos.dataRepos.length > 0) {
            return res.render('index', {
                homeText: data.homeText,
                aboutText: data.aboutText,
                dataRepos: dataListRepos.dataRepos
            });
        } else {
            console.error("Nenhum repositório encontrado.");
            return res.render('index', { homeText: data.homeText, aboutText: data.aboutText, dataRepos: [] });
        }
    } catch (error) {
        console.error("Erro ao buscar repositórios:", error.message);
        return res.render('index', { homeText: data.homeText, aboutText: data.aboutText, dataRepos: [] });
    }
});

module.exports = routes;
