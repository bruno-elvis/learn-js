const numerosTeste1 = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8];
const numerosUnicosTeste1 = [...new Set(numerosTeste1)];

const numerosTeste2 = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8];
const numerosUnicosTeste2 = numerosTeste2.filter((valor, indice) => numerosTeste2.indexOf(valor) === indice);

console.log(numerosUnicosTeste1);
console.log();
console.log(numerosUnicosTeste2);