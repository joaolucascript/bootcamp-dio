"use strict";
// Lidando com objetos, enum e interfaces
const pessoa = {
    nome: "Beatriz",
    idade: 19,
    profissao: "Streamer",
};
pessoa.idade = 20;
const joao = {
    nome: "João",
    idade: 24,
    profissao: "Desempregado",
};
const polvilho = {
    nome: "Polvilho",
    idade: 2,
    profissao: "Streamer",
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Streamer"] = 0] = "Streamer";
    Profissao[Profissao["Desempregado"] = 1] = "Desempregado";
    Profissao[Profissao["ProPlayer"] = 2] = "ProPlayer";
    Profissao[Profissao["Desenvolvedor"] = 3] = "Desenvolvedor";
    Profissao[Profissao["Biologa"] = 4] = "Biologa";
})(Profissao || (Profissao = {}));
const carla = {
    nome: "Carla",
    idade: 24,
    profissao: Profissao.Biologa,
};
const joaolucas = {
    nome: "João Lucas",
    idade: 24,
    profissao: Profissao.Desenvolvedor,
    materias: ["HTML", "CSS", "Javascript", "TypeScript"],
};
function listar(lista) {
    for (const item of lista) {
        console.log("- ", item);
    }
}
listar(joaolucas.materias);
