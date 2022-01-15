let n1 = 2;
let n2 = 3;

const soma = (a, b) => a + b;

console.log(soma(n1, n2));

const sub = (a, b) => a - b;

console.log(sub(n2, n1));

const somaLsita = (lista) => lista.reduce(soma);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(somaLsita(soma));
