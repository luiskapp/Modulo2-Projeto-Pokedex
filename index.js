const express = require("express");
const path = require("path");
const pokedex = [
    {
        numero: 001,
        nome: "Bulbasaur",
        tipo: ["Grass", "Poison"],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        descricao: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        altura: "0.7 m",
        peso: "6.9 kg",
        categoria: "Seed",
        habilidade: "Overgrow"
    },
    {
        numero: 004,
        nome: "Charmander",
        tipo: ["Fire"],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        altura: "0.6 m",
        peso: "8.5 kg",
        categoria: "Lizard",
        habilidade: "Blaze"
    },
    {
        numero: 007,
        nome: "Squirtle",
        tipo: ["Water"],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        altura: "0.5 m",
        peso: "9.0 kg",
        categoria: "Tiny Turtle",
        habilidade: "Torrent"
    },
]

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {pokedex});
});
app.get("/cadastro", (req, res) => {
    res.render("cadastro", {pokedex});
});
app.get("/detalhes", (req, res) => {
    res.render("detalhes", {pokedex});
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);