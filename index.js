const express = require("express");
const server = express();
const articles = require("./articles.json");
// server.use(parseIdToInt);

server.get("/", (req, res) => {
    console.log("rendu serveur");
    res.send({
        name: "Kadea",
    });
});

server.get("/articles", (req, res) => {
    res.send({articles});
});

server.get("/articles/:id", parseIdToInt, (req, res) => {
    const id = req.params.id;
    const newOne = req.new;
    console.log({id, newOne});
    const foundArticle = articles.find(article => article.id === id)
    console.log(`Article ${id}`);
    if(foundArticle) {
        res.status(200).json(foundArticle);
    } else {
        res.status(404).send('Article not found');
    }
})

function parseIdToInt (req, res, next) {
    console.log("parse id to int");
    req.params.id = parseInt(req.params.id, 10);
    console.log("test");
    req.new ="NEW"
    next();
}


server.listen(3000, () => console.log("server runing"));