const pessoa = {
    nome: "Ana",
    idade: 20,
    profissao: "Desenvolvedora"
}

pessoa.idade = 25;

const joao: {nome: string, idade: number, profissao: string} = {
    nome: "Joao",
    idade: 25,
    profissao: "administrador"
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: "Paula",
    idade: 22,
    profissao: "Desenvolvedora"
}

enum Profissao {
    Desenvolvedora,
    Professora,
    Atriz,
    JogadorDefutebol
}


interface Pessoa {
    nome: string,
    idade?: number,                          //interrogação e igual serve para ser opcional
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}


const vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 17,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: "Jessica",
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática Discreta', 'Programação']
}

const monica: Estudante = {
    nome: "Mônica",
    idade: 21,
    materias: ['Matemática Discreta', 'Programação']
}


function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);