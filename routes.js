const express = require('express');
const routes = express.Router();
const data = require("./data/data_html");

routes.get("/", function(req, res) {
    return res.redirect("/home");
});

routes.get('/home', function(req, res) {
    console.log("Rendering index");
    // Renderizar o arquivo EJS com dados
    return res.render('index', { homeText: data.homeText });
});


module.exports = routes;
