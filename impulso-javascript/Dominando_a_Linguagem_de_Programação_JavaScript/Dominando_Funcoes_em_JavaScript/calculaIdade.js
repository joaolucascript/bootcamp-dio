function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: "João",
  idade: 24,
};

const pessoa2 = {
  nome: "Bia",
  idade: 19,
};

const animal1 = {
  nome: "Mike",
  idade: 10,
  raça: "Boxer",
};

console.log(calculaIdade.call(animal1, 2));
console.log(calculaIdade.apply(pessoa2, [8]));
