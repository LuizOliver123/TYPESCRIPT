"use strict";
const pessoa = {
    nome: "Ana",
    idade: 20,
    profissao: "Desenvolvedora"
};
pessoa.idade = 25;
const joao = {
    nome: "Joao",
    idade: 25,
    profissao: "administrador"
};
const paula = {
    nome: "Paula",
    idade: 22,
    profissao: "Desenvolvedora"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedora"] = 0] = "Desenvolvedora";
    Profissao[Profissao["Professora"] = 1] = "Professora";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
    Profissao[Profissao["JogadorDefutebol"] = 3] = "JogadorDefutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: "Maria",
    idade: 17,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática Discreta', 'Programação']
};
const monica = {
    nome: "Mônica",
    idade: 21,
    materias: ['Matemática Discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
