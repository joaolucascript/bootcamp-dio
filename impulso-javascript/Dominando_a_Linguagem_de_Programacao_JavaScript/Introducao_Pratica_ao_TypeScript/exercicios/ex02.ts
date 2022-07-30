// Lidando com objetos, enum e interfaces
const pessoa = {
  nome: "Beatriz",
  idade: 19,
  profissao: "Streamer",
};

pessoa.idade = 20;

const joao: { nome: string; idade: number; profissao: string } = {
  nome: "João",
  idade: 24,
  profissao: "Desempregado",
};

const polvilho: { nome: string; idade: number; profissao: string } = {
  nome: "Polvilho",
  idade: 2,
  profissao: "Streamer",
};

enum Profissao {
  Streamer,
  Desempregado,
  ProPlayer,
  Desenvolvedor,
  Biologa,
}

interface Pessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}

interface Estudante extends Pessoa {
  materias: string[];
}

const carla: Pessoa = {
  nome: "Carla",
  idade: 24,
  profissao: Profissao.Biologa,
};

const joaolucas: Estudante = {
  nome: "João Lucas",
  idade: 24,
  profissao: Profissao.Desenvolvedor,
  materias: ["HTML", "CSS", "Javascript", "TypeScript"],
};

function listar(lista: string[]) {
  for (const item of lista) {
    console.log("- ", item);
  }
}

listar(joaolucas.materias);
