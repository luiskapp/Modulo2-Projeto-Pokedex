const express = require("express");
const path = require("path");
const pokedex = []

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/cadastro", (req, res) => {
    res.render("index");
});
app.get("/detalhe", (req, res) => {
    res.render("index");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);