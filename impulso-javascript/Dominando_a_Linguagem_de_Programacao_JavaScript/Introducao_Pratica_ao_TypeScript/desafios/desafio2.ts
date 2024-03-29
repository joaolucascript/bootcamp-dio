// Como podemos melhorar o esse código usando TS?

/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

interface IPessoa {
  nome: string;
  idade: number;
  profissao: Trabalho;
}

enum Trabalho {
  Atriz,
  Padeiro,
}

const pessoa1: IPessoa = {
  nome: "maria",
  idade: 29,
  profissao: Trabalho.Atriz,
};

const pessoa2: IPessoa = {
  nome: "roberto",
  idade: 19,
  profissao: Trabalho.Padeiro,
};

const pessoa3: IPessoa = {
  nome: "laura",
  idade: 32,
  profissao: Trabalho.Atriz,
};

const pessoa4: IPessoa = {
  nome: "carlos",
  idade: 19,
  profissao: Trabalho.Padeiro,
};
