/* OPERAÇÕES COM ARRAYS 
    Todos os métodos devem receber uma função de callback (anônima),
    as mesmas podem receber até 3 parâmetros, sendo que o 1º se refere aos valores em cada índice,
    o 2º ao próprio índice e o 3º é a referencia ao próprio array chamado.

*/
console.log('FUNÇÕES DE OPERAÇÕES COM ARRAYS: ');

const arrayTeste = [13, 31, 2, 'Opa', true, 2];

console.log('Array de Teste: ' + arrayTeste);

arrayTeste.forEach(function(v, i, array){ (typeof v === 'string') && console.log(`FOREACH: idx: Valor: ${v}, Índice: ${i}, Array: ${array}`)}) // Uma iteração simples em um array, sem retorno

arrayMAP = arrayTeste.map(function(v){return v += 1}) // Retorna a transformação de elementos do array, retorna o resultado da operação (array)

arrayEVERY = arrayTeste.every(function(v){return typeof v === 'boolean'}) // Todos os elementos atendem a condição? Retorna somente um booleano. Sim = True / Não = False

arraySOME = arrayTeste.some(function(v){return typeof v === 'string'}) // Algum elemento atende a condição? Retorna somente um booleano. Sim = True / Não = False

arrayFILTER = arrayTeste.filter(function(v){return typeof v === 'number'}) // Retorna os elementos do array que atendem a condição passada. Retorna um novo array

console.log('MAP: ' + arrayMAP);
console.log('EVERY: ' + arrayEVERY);
console.log('SOME: ' + arraySOME);
console.log('FILTER: ' + arrayFILTER);
console.log();
console.log();

/* FUNÇÕES DE BUSCA */
console.log('FUNÇÕES DE BUSCA EM ARRAYS: ');

console.log('INDEXOF: ' + arrayTeste.indexOf(31)); // Retorna o índice da primeira ocorrência do valor passado por parâmetro, retorna '-1' caso não há ocorrencia do valor
console.log('LASTINDEXOF: ' + arrayTeste.lastIndexOf(2)); // Retorna o índice da última ocorrência do valor passado por parâmetro, retorna '-1' caso não há ocorrencia do valor
console.log('INCLUDES: ' + arrayTeste.includes('Opa') + ' / o mesmo que: ' + (arrayTeste.indexOf('Opa') > -1)); // Retorna 'true' caso o valor passado no parâmetro esteja incluso (há ocorrência) no array (é Case Sensitive)
console.log('FIND: ' + arrayTeste.find(function(v, idx, array){return v > 23})); // Retorna o 1º elemento que atenda a condição passada, recebe uma função de callback, caso não haja ocorrência retorna 'undefined'
console.log('FINDINDEX: ' + arrayTeste.findIndex(function(v, idx, array){return v > 23})); // Retorna o índice da primeira ocorrência que atenda a condição, caso não haja ocorrência retorna '-1'

console.log();
console.log();

/* MÉTODOS DE MANIPULAÇÃO DE ARRAYS */
console.log('MÉTODOS DE MANIPULAÇÃO DE ARRAYS: ');

const arrayTeste2 = [0, 5]

console.log('Array para String: ' + arrayTeste.toString() + ' typeof: ' + typeof arrayTeste.toString()); // Converte um Array em uma String
console.log('JOIN: ' + arrayTeste.join() + ' ' + typeof arrayTeste.join()); // Converte um Array em uma String, pode receber um delimitador dos valores por parâmetro, retorna sempre uma String
console.log('JOIN (Com Delimitador): ' + arrayTeste.join(' - ') + ' ' + typeof arrayTeste.join(' - '));
console.log('CONCAT: ' + arrayTeste.concat(arrayTeste2, 12, 13) + ' ' + typeof arrayTeste.concat(arrayTeste2, 12, 13)); // Concatena arrays inteiros, retorna uma String
// Boa prática para copiar uma Array
let arrayTesteCopia = [].concat(arrayTeste);
console.log('arrayTesteCópia (CONCAT): ' + arrayTesteCopia);

arrayTesteCopia[arrayTesteCopia.length] = 155;
console.log('arrayTeste Original: '+ arrayTeste);
console.log('arrayTesteCópia (CONCAT) + Iteração (155): ' + arrayTesteCopia);

console.log();
console.log();

console.log('PUSH ("Bruno"): ' + arrayTeste.push('Bruno')); // Adiciona um ou mais elementos no final de um Array, retorna sempre o novo tamanho do Array depois da adição dos elementos
console.log('Resultado: ' + arrayTeste);
console.log('POP: '+ arrayTeste.pop()); // Remove o último elemento do array, retorna este elemento
console.log('Resultado: ' + arrayTeste);
console.log('SHIFT: ' + arrayTeste.shift()); // Remove o primeiro elemento do array, retorna este elemento
console.log('Resultado: ' + arrayTeste)
console.log('UNSHIFT (("Niti", false)): ' + arrayTeste.unshift('Niti', false)); // Adiciona elementos no início de um array, retorna o seu tamanho
console.log('Resultado: ' + arrayTeste);

console.log('SLICE (3, 4): ' + arrayTeste.slice(4, 6)); // Obtém os valores no intervalo de índices passado por parâmetro, onde o primeiro é incudente e o segundo é excludente, retona um Array (Recortado/fatiado)
console.log('SPLICE (3, 7): ' + arrayTeste.splice(3, 7, 'Bim')); // Remove os elementos de um Array dentro de um intervalo, passado por parâmetro, onde o primeiro é incudente e o segundo é excludente. A partir do terceiro parâmetro os valores são incluídos no Array como o método 'unshift', por fim retorna os elementos removidos do Array
console.log('Resultado: ' + arrayTeste);

arrayTeste.reverse(); // Rerverte um array
console.log('ArrayTeste (REVERSE): ', arrayTeste);

let arrayNumerico = [1, 2, 3, 4, 5, 1, 9, 5, 7, 2];

let arrayNumericoSoma = arrayNumerico.reduce((total, atual) => total + atual); // soma todos os elementos de um array com "reduce()", recebe um função de callback que pode receber até 4 parâmetros (acumulador, valorAtual, indice, array) e um 'valor inicial' que define o tipo do retorno
console.log('Array (arrayNumericoSoma): ', arrayNumerico);
console.log('Soma de todos os elementos do array (arrayNumericoSoma) com o método REDUCE', arrayNumericoSoma);

/* Obtendo Array com números que não se repetem com REDUCE */
let arrayNumericoUnico = arrayNumerico.reduce((arraySemRepeticao, valorAtual) => {
    if(arraySemRepeticao.indexOf(valorAtual) < 0){
        arraySemRepeticao.push(valorAtual)
    }
    return arraySemRepeticao;
}, []);

console.log('Obtendo Array com números que não se repetem com REDUCE:', arrayNumericoUnico);
console.log();
console.log();
/**/
const meuNomeCompleto = ['Bruno', 'Elvis', 'Pereira', 'Silva'];
const objSM = {
    atual : 'Yamaha',
    proxima : 'Kawasaki'
};


/* SPREAD */
const fmlBBN = ['Niti', 'Bim'];
const fml = meuNomeCompleto.push(...fmlBBN); // não passa um Array como parâmetro, passa os valores separadamente do Array de origem como parâmetro
console.log('Array com nome completo concatenado com outro Array (fmlBBN): ' + meuNomeCompleto);

const [ meuPrimeiroNome, ...restoDoMeuNome ] = meuNomeCompleto;
console.log('Obtendo resto do meu nome com Spred: ', restoDoMeuNome);

/* DESTRUCTING */
const [ primeiroNome, sobreNome, , ultimoNome ] = meuNomeCompleto; // Com Arrays (cara parâmetro cria uma variável a partir de um índice de um Array, pode receber qualquer nome, pode ser vazio, onde o valor dentro do Array de origem será ignorado)
const { proxima } = objSM; // Com objetos (o parâmetro deve ser uma chave no objeto de origem, devendo ser sempre o mesmo nome)

console.log(primeiroNome);
console.log(sobreNome);
console.log(ultimoNome);
console.log(proxima);
console.log();
console.log();

/* FOR IN / FOR OF (Uma sintaxe mais simplificada do for para percorrer listas/arrays/objetos) */

/* FOR IN */
console.log('FOR IN: ');
const individuo = {
    nome : 'Bruno',
    idade : 26,
    winner : true
};

for (chave in individuo) { // Percorre Objetos, obtendo valor, para cada chave/propriedade
    console.log(individuo[chave]);
}

/* FOR OF */
console.log('FOR OF: ');
for (valores of meuNomeCompleto) { // Percorre um Array
    console.log(valores);
}

console.log();
console.log();

/* TRABALHANDO COM DATAS */
console.log('-- TRABALHANDO COM DATAS --');

const data = new Date(Date.UTC(2022, 3, 28, 3, 0, 0));
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

dataFormatada = data.toLocaleDateString('pt-BR', options)

console.log(dataFormatada);
console.log();
console.log();

/*-----------------------*/
/* Array.from() e Array.of() - Usados para desenvolvimento de legados (IE, Mozilla...)*/
function somar () {
    const numeros = Array.from(arguments); //Obtem um array apartir de uma Elemento 'Não Array' (que não herdam propriedades da Classe 'Array', não possuem os métodos reduce, map, reverse...)
    return numeros.reduce((totalSoma, numeroAtual) => totalSoma + numeroAtual);
};

console.log('Somar: ', somar(5, 5, 5));

console.log(Array.of(1, 2, 3, 4)); // Cria um Array com os elementos passados por parâmetro

/* FUNÇÕES SIMPLES COM MÉTODOS AVANÇADOS */
function subtrair () {
    const numeros = [];
    
    for (numero of arguments) {
        numeros.push(numero)
    }

    return numeros.reduce((totalSub, numeroAtual) => totalSub - numeroAtual);
};

function media () {
    return somar(...arguments) / arguments.length;
};

console.log('Obtém média (10, 20, 30): ', media(10, 20, 30));
console.log('Obtém a subtração (20, 5): ', subtrair(20, 5));