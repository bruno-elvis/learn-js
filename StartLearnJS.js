const pessoa = [{
    nome : "Maria",
    idade : 25,
    "endereco" : "Narnia",
    flEstudante : true,
    docs : {"CPF" : 15846527805, "CNH" : 123456789, "Endereço" : 13},
    teste : function(){nome = 25 ? 'ok' : 'no'}
}, {
    nome : "Mario",
    idade : 26,
    "endereco" : "Nascar",
    flEstudante : null,
    docs : {"CPF" : 16712325801, "CNH" : 987654321, "Endereço" : 31}
}];

console.log(pessoa[0].teste);

for (let ind = 0; ind < pessoa.length; ind++) {
    if(pessoa[ind].flEstudante === true){
        pessoa[ind].flEstudante = "Sim.";
    }
    else if (pessoa[ind].flEstudante === false) {
        pessoa[ind].flEstudante = "Não.";
    }
    else {
        pessoa[ind].flEstudante = "Não definido.";
    }

    console.log(`Nome: ${pessoa[ind].nome}, CPF: ${pessoa[ind].docs.CPF}, é Estudante? ${pessoa[ind].flEstudante}`);
};

console.log();
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* TRABALHANDO COM DECLARAÇÃO DE VARIÁVEL DO TIPO *VAR* */

var varMeuNome = 'Bruno';
console.log(varMeuNome + ' (definida no escopo global.)');

function RetornarMeuNome(){
    varMeuNome = "Elvis";
}

RetornarMeuNome(); // Executa a redeclaração do valor da variável "varMeuNome"
console.log(varMeuNome + ' (reatribuição de valor dentro de um escopo local de função.)'); // Exibe o valor reatribuído, mesmo estando em escopo local, devido a característica "Redeclaration" da declaração de variável do tpo VAR
console.log();

function rRetornarMeuNome(){
    var varMeuNome = "Silva"; //Redefinição da mesma variável "varMeuNome" em escopo local
    return varMeuNome;
}

console.log(varMeuNome);
console.log(rRetornarMeuNome() + ' (valor da variável redeclarada em escopo local de função)'); // Neste caso a variável do tipo VAR é limitada ao seu escopo local, pois é de escopo local, mesmo estando com o mesmo nome da VAR definida anteriormente no escopo global, então recebe o valor atribuido no escopo da função "rRetornarMeuNome"
console.log();

var varMeuNome = "Recebe sempre o último valor declarado.";
console.log(varMeuNome);

// Conclusão: Suas características são: O Tipo VAR é de "Global Scope/Function Scope", permite "Redeclaration" e sofre com "Hoisting"
console.log();
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* TRABALHANDO COM DECLARAÇÃO DE VARIÁVEL DO TIPO *LET* */

var letMeuNome = 'Bruna';
//let letMeuNome = 'Bruna'; -> Gera erro, não é aceito declaração de variáveis com mesmo nome do tipo "let"
console.log(letMeuNome + ' (definida no escopo global.)');

function RetornarNome(){
    letMeuNome = 'Rodrigues'; // Aceita reatribuição de valor, definida em escopo local de função
}

RetornarNome();
console.log(letMeuNome + ' (reatribuição de valor dentro de um escopo local de função.)');
console.log();

if (5 + 5 === 10) {
    let letMeuNome = 'Lima'; // O valor não será atribuído a variável pois as declarações da mesma estão em escopos diferentes, uma estando em escopo global e a segunda em escopo local (bloco condicional)
    // Não aceita redeclaração em escopos diferentes, apenas reatribuição de valores
}

console.log(letMeuNome);

// Conclusão: A visibilidade desse tipo de variável "LET", está limitada ao bloco de código a qual ela foi definida (não permite redeclaração em escopos diferentes, apenas reatribuição de valores)
// Só permite uma única declaração (ex: let nome; let nome; = erro!)
//                                 (ex2: var nome; var nome; é permitido!)
// Possui as propriedades de "Function Scope / Block Scope".
console.log();
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* TRABALHANDO COM DECLARAÇÃO DE VARIÁVEL DO TIPO *CONST* */

const constNome = 'Friedrich Nietzsche';
//let constNome = 'Gato Preto' - > Erro! A variável do tipo "CONST" não aceita ser atribuido outro valor depois de declarada

console.log(constNome);

const minhaFamilia = {                  //
    nomes : ['Bruna', 'Bruno', 'Nietzsche'], // Definição de um objeto do tipo "const"
    idades : [23, 26, 2]                //
};

console.log(minhaFamilia.nomes);
console.log(minhaFamilia.idades);

// Reatribuição de um valores no objeto, é permitido pois a alteração é feita nos valores do objeto, mas o mesmo continua utilizando o mesmo endereço de memória (referência) definido/reservado inicialmente na declaração da variável do tipo "const"
minhaFamilia.nomes[0] = 'Bim';
minhaFamilia.nomes[1] = 'Bim';
minhaFamilia.nomes[2] = 'Niti';
minhaFamilia.idades[0] = 13;
minhaFamilia.idades[1] = 5;
minhaFamilia.idades[2] = 1;

console.log(minhaFamilia.nomes);
console.log(minhaFamilia.idades);

// Consusão: Tem as propriedades de "Function Scope / Block Scope" e não aceita receber valores posteriores a sua declaração inicial / de inicialização, em sua declaração reserva um endereço na memória para alocação de valores, não aceita reapontamento da fonte de dados dos valores da constante
console.log();
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*TRATAMENTO DE ERROS*/

let testeTryCatch = 5

function testeAdicao(t){
    if(t !== 5){
        throw Error('Não é permitido número diferente de 5!')
    }

    testeTryCatch = t + testeTryCatch
}

console.log(testeTryCatch)

try {
    testeAdicao(10)
} catch (erro) {
    console.log('Número não é 5!')
    console.log(erro.message)
    console.log(erro)
}

console.log(testeTryCatch)