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
/* TRATAMENTO E MANIPULAÇÃO DE STRINGS */
console.log();
console.log('***** TRATAMENTO E MANIPULAÇÃO DE STRINGS *****');

const stringParaTestes = 'Texto para teste';
const stringParaTestesComEspacos = '     ' + stringParaTestes + '     ';

console.log('STRING TESTE: ', stringParaTestes);
console.log('USO DOS MÉTODOS "REPLACE" E "REPLACEALL" (São Case Sensitive): ');
console.log('REPLACE (Caracter) ("a", "e"): ', stringParaTestes.replace('a', 'e')); // Substitui a primeira ocorrência de um caracter ou trecho dentro de uma strng por outro, o primeiro parâmetros sendo o trecho à substituir e o segundo o trecho substituto (aceita expressão regular no primeiro parâmetro)
console.log('REPLACE (Trecho) ("teste", "brincar"): ', stringParaTestes.replace('teste', 'brincar'));
console.log('REPLACEALL ("t", "B"): ', stringParaTestes.replaceAll('t', 'B')); // O mesmo efeito do método "replace", porém substitui todas as ocorrências dentro de uma string (possuí pouco suporte referente a compatibilidade entre navegadores, não é aceito em todos)
console.log();
console.log('USO DO MÉTODO "INDEXOF": ');
console.log('INDEXOF ("p"): ', stringParaTestes.indexOf('p')); // Retorna a posição da primeira ocorrência (índice), do parâmetro passado. Retorna "-1" caso não haja ocorrência
console.log();
console.log('USO DO MÉTODO "INCLUDES": ');
console.log('INCLUDES ("teste"): ', stringParaTestes.includes('teste')); // Verifica se um valor está incluso dentro de uma string, retorna um booleano
console.log();
console.log('USO DOS MÉTODOS "SLICE" E "SUBSTRING": ');
console.log('SLICE (0, 5): ', stringParaTestes.slice(0, 5)); // Obtém um valor referente a um intervalo de posições (índices) passados por parâmetro, sendo que o primeiro é includente e o segundo é excludente. Não permite inversão de parâmetros (primeiro maior que o segundo)
console.log('SLICE (7): ', stringParaTestes.slice(6)); // Caso haja omissão do segundo parâmetro, irá retornar da posição inicial passada até o tamanho limite da String
console.log('SLICE (-5): ', stringParaTestes.slice(-5)); // Aceita valores negativos como parâmetro, representando os índices que partem do fim da String (regressivo)
console.log();
console.log('SUBSTRING (0, 5): ', stringParaTestes.substring(0, 5)); // Funciona exatamento como o método "slice", porém não aceita parâmetros regressivos (negativos).
console.log('SUBSTRING (10, 6): ', stringParaTestes.substring(10, 6)); // Permite a inversão dos parâmetros (primeiro índice maior que o segundo)
console.log();
console.log('USO DOS MÉTODOS "TRIM", "TRIMSTART" E "TRIMEND": ');
console.log('Variável ("stringParaTestesComEspacos"): \n', stringParaTestesComEspacos);
console.log('TRIM: ', stringParaTestesComEspacos.trim()); // Remove espaços vazios existentes no início e no fim de uma string
console.log('TRIMSTART: ', stringParaTestesComEspacos.trimStart()); // Remove espaços vazios existentes no início da string
console.log('TRIMEND: ', stringParaTestesComEspacos.trimEnd()); // Remove espaços vazios existentes no fim da string
console.log();
console.log('USO DOS MÉTODOS "PADSTART" E "PADEND": ');
console.log('PADSTART: (21): ', stringParaTestes.padStart(21)); // Preenche o início de uma string com carcteres passados no segundo parâmetro (opcional), caso omitido, preenche com espaços vazios. O primeiro parâmetro defini o tamanho que terá esta string (length)
console.log('PADSTART: (21, "❤"): ', stringParaTestes.padStart(21, '❤'));
console.log('PADEND: (21): ', stringParaTestes.padEnd(21)); // Preenche o fim de uma string com carcteres passados no segundo parâmetro (opcional), caso omitido, preenche com espaços vazios. O primeiro parâmetro defini o tamanho que terá esta string (length)
console.log('PADEND: (21, "❤"): ', stringParaTestes.padEnd(21, '❤'));
console.log();
console.log('USO DOS MÉTODOS "STARTSWITH" E "ENDSWITH": ');
console.log('STARTSWITH ("Texto"): ', stringParaTestes.startsWith('Texto')); // Verifica se uma string inicia com um caracter ou valor, retorna um booleano. Pode receber um segundo parâmetro opcional (índice) que defini de onde começará a busca
console.log('ENDSWITH ("teste"): ', stringParaTestes.endsWith('teste')); // Verifica se uma string termina com um caracter ou valor, retorna um booleano. Pode receber um segundo parâmetro opcional (índice) que defini de onde começará a busca
console.log('ENDSWITH ("a", 10): ', stringParaTestes.endsWith('a', 10)); // Último parâmetro é excludente
console.log('STARTSWITH ("para", 6): ', stringParaTestes.startsWith('para', 6)); // Pode receber um segundo parâmetro opcional (índice) que defini de onde começará a busca
console.log();
console.log('USO DO MÉTODO "CHARAT": ');
console.log('CHARAT (0): ', stringParaTestes.charAt(0)); // Obtém o valor (caracter) no índice passado por parâmetro
console.log('CHARAT (0): ', stringParaTestes.charCodeAt(0)); // Obtém o charCode do caracter obtido com o método, no índice passado por parâmetro
console.log();
console.log('USO DO MÉTODO "SPLIT": ');
console.log('SPLIT (" "): ', stringParaTestes.split(' '), ' Tamanho do Array: ', stringParaTestes.split(' ').length); // Separa uma string com o separador sendo o parâmetro passado, retorna um array (Cria uma array a partir de uma string)
console.log();
console.log();
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* CLASSE NUMBER E SEUS MÉTODOS */
console.log('***** CLASSE NUMBER E SEUS MÉTODOS *****');
console.log();

const numberParaTestes = 1234567.89;

console.log('USO DO MÉTODO "TOFIXED": ');
console.log('TOFIXED (1): ', numberParaTestes.toFixed(1)); // Defini a quantidade de casas decimais após a vírgula (quando o parâmetro for menor do que a quantidade existente de digitos após a vírgula, o mesmo é arredondado para cima), retorna uma string com o número
console.log('TOFIXED (0): ', numberParaTestes.toFixed(0)); // Caso nao seja passado parâmetro (é assumido o valor '0'), é removidos os digitos após a vírgula e arredondado o número
console.log('TOFIXED (5): ', numberParaTestes.toFixed(5)); // Caso parâmetro seja maior do que os decimais existentes após a vírgula, o restante é competado com zeros
console.log();
console.log('USO DO MÉTODO "TOPRECISION": ');
console.log('TOPRECISION (7): ', numberParaTestes.toPrecision(7)); // Defini a quantidade de dígitos que será exibido (arredonda o ultimo digito, caso possua decimais após a vírgula)
console.log('TOPRECISION (15): ', numberParaTestes.toPrecision(15)); // Caso parâmetro seja maior do que os decimais existentes após a vírgula, o restante é competado com zeros
console.log();
console.log('USO DO MÉTODO "TOLOCALESTRING": ');
console.log('TOLOCALESTRING ("pt-BR", {style: "currency", currency: "BRL"}): ', numberParaTestes.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); //
console.log('TOLOCALESTRING ("pt-BR", {style: "percent"}): ', numberParaTestes.toLocaleString('pt-BR', {style: 'percent'})); //
console.log();
console.log('USO DOS MÉTODOS DE VERIFICAÇÃO DE TIPO "ISFINITE" E "ISINTEGER": ');
console.log('ISFINITE: É um número? (' + numberParaTestes + ')', (isFinite(numberParaTestes.toString())) ? 'Sim!' : 'Não!'); // Verifica se o valor (parâmetro) passado é um número finito, independente de seu tipo primitivo
console.log('ISINTEGER: É um inteiro? (' + numberParaTestes + ')', (Number.isInteger(numberParaTestes)) ? 'Sim!' : 'Não!', 'Tipo:', typeof numberParaTestes);
console.log('ISINTEGER: É um inteiro? (' + numberParaTestes.toFixed() + ')', (Number.isInteger(parseInt(numberParaTestes.toFixed()))) ? 'Sim!' : 'Não!', 'Tipo:', typeof parseInt(numberParaTestes.toFixed()));
console.log();
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* CLASSE MATH E SEUS MÉTODOS */
console.log('***** CLASSE MATH E SEUS MÉTODOS *****');
console.log();
console.log('USO DO MÉTODO "ROUND": ');
console.log('Math.round(5.5):', Math.round(5.5)); // Arredonda para cima (maior ou igual a 0.5)
console.log('Math.round(5.4):', Math.round(5.4));
console.log();
console.log('USO DO MÉTODO "FLOOR": ');
console.log('Math.floor(1.9):', Math.floor(1.9)); // Arredonda sempre para baixo
console.log();
console.log('USO DO MÉTODO "CEIL": ');
console.log('Math.ceil(1.1):', Math.ceil(1.1)); // Arredonda sempre para cima
console.log();
console.log('USO DO MÉTODO "RANDOM": ');
console.log('RANDOM:', Math.random()); // Retorna sempre um número aleatório entre 0 e 1
console.log('RANDOM (de 0 a 10):', parseInt(Math.random() * 10));
console.log('RANDOM (entre 5 e 50):', Math.random() * (50 - 5) + 5);
console.log();
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* TRABALHANDO COM A CLASSE DATE E SEUS MÉTODOS */
console.log('***** CLASSE DATE E SEUS MÉTODOS *****');
console.log();

const dataParaTestes = new Date(); // Data atual
const dataMeuAniversario = new Date(823090200000); // Instanciando data apartir de um valor Timestamp
const dataAniversarioBim = new Date(1999 /*Ano*/, 02/*Mês (Inicia-se em 0)*/, 13/*Dia*/); // Instanciando um objeto data com valor manual

console.log('USO DO MÉTODO "TOLOCALEDATESTRING" e "toLocaleString" PARA FORMATAÇÃO DE DATAS: ');
console.log('Obtendo data atual formatada (dataParaTestes):', dataParaTestes.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})); // Obtendo data atual formatada, chave 'hour12' define se o horário receberá o formato de 12 horas ou não
console.log('Timestamp para date (dataMeuAniversario.toLocaleDateString(+)):', dataMeuAniversario.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}));
console.log('Timestamp para date (dataMeuAniversario.toLocaleString()):', dataMeuAniversario.toLocaleString('pt-BR'));
console.log('Data definida manualmente (dataAniversarioBim.toLocaleDateString()):', dataAniversarioBim.toLocaleDateString());
console.log('Data definida manualmente (dataAniversarioBim.toLocaleDateString(+)):', dataAniversarioBim.toLocaleDateString('pt-BR', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})); // Para o parâmetro "option" da função, em relação a chave 'month' pode receber os tipos principais: numeric, short e long
console.log();
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* TRABALHANDO COM MÉTODOS DE AGENDAMENTO E INTERVALOS */
/* Obs: tentar tratar a execução para que sea assíncrona ESTUDAR PROMISSES NOVAMENTE*/
/*console.log('***** TRABALHANDO COM MÉTODOS DE AGENDAMENTO E INTERVALOS DE EXECUÇÃO *****');
console.log();

let contador = 3;

console.log('USO DO MÉTODO "SETTIMEOUT": ');
setTimeout(() => console.log('Número entre 0 e 5 gerado aleatóriamente com método "setTimeout((), 1000)":', parseInt(Math.random() * 5)), 1000); // Recebe uma função de callback como primeiro parâmetro (Pode ser anônima), e o tempo (em milissegundo) o qual o método irá aguardar para executar a função passada. Retorna um number que é o ID da instância de execução do método
console.log();
console.log('USO DO MÉTODO "SETINTERVAL": ');
const contagem = setInterval(() => {
    console.log('Contador sendo executado pela função "setInterval((3), 1000):"', contador--);

    contador === 0 && clearInterval(contagem);
}, 1000);*/

console.log();

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*TRATAMENTO DE ERROS*/
/*
let testeTryCatch = 5

function testeAdicao(t){
    if(t !== 5){
        throw Error('Não é permitido número diferente de 5!');
    };

    testeTryCatch = t + testeTryCatch;
}

console.log(testeTryCatch);

try {
    testeAdicao(10)
} catch (erro) {
    console.log('Número não é 5!');
    console.log(erro.message);
    console.log(erro);
};

console.log(testeTryCatch);
*/

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* TRABALHANDO COM ARROW FUNCTIONS */
/* Obs: Quando é necessário que o comportamento do "this" (sua representação) não seja alterado dentro de um escopo,
        pode ser utilizadam o procedimento 'arrow function' para definição do escopo da função que chama o "this".

        Arrow Function: () => {}
        Declaration: function () {}
        
        "Em muitos casos, o valor this é determinado pela forma como a função é chamada.
         Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada.
         ES5 introduziu o método bind para estabelecer o valor this da função, independentemente de como ela seja chamada,
         e ECMAScript 2015 introduziu o arrow functions, cujo this é lexicalmente delimitado (o valor this é estabelecido segundo o escopo de execução no qual está inserido)."
Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this */

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* OBSERVAÇÕES E NOVIDADES SOBRE FUNCTIONS DAS VERSOES MAIS RECENTES DO JAVASCRIPT */
console.log();
console.log('***** OBSERVAÇÕES E NOVIDADES SOBRE FUNCTIONS DAS VERSOES MAIS RECENTES DO JAVASCRIPT *****');
console.log();

/* Definição clássica de função */
function miar() {
    console.log(this.nome, 'Miou 😽');
};

function miando(comida, feliz) {
    console.log('Miau, miau 🎶 do', this.nome);
    console.log(`Quer comida? ${(comida) ? 'Siiim! 😼,' : 'Não! 😽,'} está Feliz? ${feliz} 😻`);
};

/* Definicao de Métodos de Objetos */
const gatinho = {
    nome: 'Niti',
    miar, // Quando o nome da chave for o mesmo da função da qual ela referencia, podemos omitir o nome da chave
    miado() {console.log('Miado 😸 do', this.nome)} // Quando a definição da função for no próprio objeto de origem, podemos declarar resumidamente com esta sintaxe
};

gatinho.miado();
console.log();
gatinho.miar();
console.log();

console.log('MÉTODO CALL:');
miando.call(gatinho, true, 'Siiim!!!'); // O método apply() chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).
// No método "call" é passado o contexto do this desejado no primeiro parâmetro, e nos demais é passado os parâmetros obrigatório da função que chama o "call"
console.log();

console.log('MÉTODO APPLY:');
miando.apply(gatinho, [false, 'Miaau!!!']) // O método apply() chama uma função com um dado valor this e arguments providos como uma array (ou um objeto parecido com um array).
// No método "apply" é passado o contexto do this desejado no primeiro parâmetro, e nos demais é passado um array que contém os parâmetros obrigatório da função que chama o "apply"
console.log();
console.log();

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* TRABALHANDO COM ENCADEAMENTO DE FUNÇÕES */
console.log();
console.log('***** TRABALHANDO COM ENCADEAMENTO DE MÉTODOS *****');
console.log();

const testeEncadeamentoMetodos = {
    valorInicial: 5,
    somar(operando) { this.valorInicial += operando; return this;}, // No caso, se pede para retornar o objeto dono do escopo, que contém a função que o retornou, podendo assim executar novamente as mesmas
    subtrair(operando) {this.valorInicial -= operando; return this;},
    exibirResultado() {console.log(this.valorInicial); return this;}
};

console.log('Operações matemáticas com encadeamento de funções (5 + 8 - 6): ') + testeEncadeamentoMetodos.somar(8).subtrair(6).exibirResultado();
console.log();
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* TRABALHANDO COM "FACTORY FUNCTIONS" (OBJETOS) */
console.log();
console.log('***** TRABALHANDO COM "FACTORY FUNCTIONS" (OBJETOS) *****');
console.log();

function criarGatinho(nome) {  
    function miando(comida, feliz) {
        console.log('Miau, miau 🎶 do', this.nome);
        console.log(`Quer comida? ${(comida) ? 'Siiim! 😼,' : 'Não! 😽,'} está Feliz? ${feliz} 😻`);
    };
    
    return {
        nome: nome,
        get miar() { console.log(this.nome, 'Miou 😽')}, // A sintaxe de get associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada, esta função não pode receber parâmetros
        get miado() {console.log('Miado 😸 do', this.nome)},
        miando
    };
};

const bichano = criarGatinho('Bichano');

console.log(bichano.nome);
bichano.miar;
bichano.miado;
bichano.miando(true, "Sim :)");

console.log();
console.log();

/* CONTINUAÇÃO: TRABALHANDO COM OBJETOS */
console.log('CONTINUAÇÃO: TRABALHANDO COM OBJETOS: ');

const fabricaKawasaki = {
    nome: 'Kawasaki',
    fabricar: function(modelo) {
        console.log(`Nova ${this.nome} - ${modelo} fabricada na data: ${new Date().toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}`);
    }
};

let buildNinja400 = Object.create(fabricaKawasaki, { identificacao: {value: 'Ninja 400cc', writable: true, configurable: true, enumerable: false }});
buildNinja400.fabricar(buildNinja400.identificacao);
// Uma forma de criar objetos que herdam as propriedades e funções do objeto pai

let buildZX6R = Object.assign(buildNinja400, fabricaKawasaki);
console.log(buildZX6R);

buildNinja400 = Object.create(fabricaKawasaki, { identificacao: {value: 'Ninja ZX6R 363cc', enumerable: true }}); // Para a função de copiar/atribuir propriedades "assign" da classe Objeto, de um objeto origem à outro ser executada com sucesso é necessário que os objetos passados tenham a propriedade "enumerable" === true, como segue o exemplo, ou seja, só trás propriedades que são enumeráveis
buildZX6R = Object.assign(buildNinja400, fabricaKawasaki); // O primeiro objeto passado como parâmetro é o que definirá a identidade do objeto que está sendo criado com o método "assign", ou seja, neste exemplo, (buildZX6R === buildNinja400) = true (mesmo endereço de memória), mesclado ao segundo objeto, caso haja propriedades de mesmo nome, o objeto final criado/mesclado pela função recebe o valor do ultimo objeto passado por parâmetro, abaixo exemplo de como usar esta função sem copiar a referencia de memória do primeiro objeto passado na memória...
console.log(buildZX6R);
console.log(`(buildNinja400 === buildZX6R)? -> ${buildNinja400 === buildZX6R}`);
console.log();

buildZX6R = Object.create(fabricaKawasaki, { identificacao: {value: 'Ninja ZX10R 1000cc', enumerable: true }});
let buildZX10R = Object.assign({}, buildZX6R, fabricaKawasaki); // É equivalente á: let buildZX10R = { ...buildZX6R, ...fabricaKawasaki } -> Mescla objetos com "spread operator";
console.log(buildZX10R);
console.log(`(buildZX10R === buildZX6R)? -> ${buildZX10R === buildZX6R}`);

console.log();
console.log();
console.log('***** TAREFA OBJETO PESSOA (GETTERS AND SETTERS) *****');

const objetoUsuarios = [];

const objetoPessoa = {
    get usuario() {
        return objetoUsuarios[objetoUsuarios.length - 1];
    },

    set usuario(_usuario) {
        (objetoUsuarios.indexOf(_usuario) < 0) && objetoUsuarios.push(_usuario);
    },

    get usuarios () {
        return objetoUsuarios;
    }
};

objetoPessoa.usuario = 'Bruno';
objetoPessoa.usuario = 'Elvis';
objetoPessoa.usuario = 'Pereira';
objetoPessoa.usuario = 'Silva';

console.log(objetoPessoa.usuario);
console.log(objetoPessoa.usuarios);

console.log();
console.log();

console.log('DESTRUCTING COM OBJETOS: ');

const objetoMeuNomeCompleto = { primeiroNome: 'Bruno', segundoNome: 'Elvis', 3: 'Pereira', 4: 'Silva' };

const { primeiroNome, segundoNome } = objetoMeuNomeCompleto; // Cria variáveis apartir das chaves de um objeto, os parâmetros devem ter o mesmo nome das chaves que deseja efetuar o "destructing", estas variáveis derivadas irao receber o mesmo nome da chave que possui os valores desejados.
const { primeiroNome: nome, segundoNome: sobrenome } = objetoMeuNomeCompleto; // Porém pode-se renomea-las com esta sintaxe CHAVE_OBJETO: NOVO_NOME, como segue o exemplo desta linha.

console.log(primeiroNome);
console.log(segundoNome);
console.log(nome);
console.log(sobrenome);

console.log(Object.keys(objetoMeuNomeCompleto)); // Retorna um array com todas as chaves de um Objeto em order ASC, não retorna propriedades de objeto não-enumeváveis.
console.log(Object.values(objetoMeuNomeCompleto)); // Retorna um Array com todos os valores de cada propriedade/chave de um objeto em ordem ASC, não retorna propriedades de objeto não-enumeváveis.
console.log(Object.entries(objetoMeuNomeCompleto)); // Retorna uma matrix bidimensional (Array de Array's) em order ASC, sendo a primeira coluna as chaves e a segunda coluna os valores de cada chave, não retorna propriedades de objeto não-enumeváveis.

console.log("Objeto 'objetoMeuNomeCompleto' antes das alterações: ");
console.log(objetoMeuNomeCompleto);
console.log();

console.log("Alterações no objeto: 'objetoMeuNomeCompleto'");
objetoMeuNomeCompleto.primeiroNome = 'Bruna'; // Alteração de propriedade
objetoMeuNomeCompleto.segundoNome = 'Rodrigues'; // Alteração de propriedade
delete objetoMeuNomeCompleto[3]; // Deleção de propriedade
delete objetoMeuNomeCompleto[4]; // Deleção de propriedade
objetoMeuNomeCompleto.idade = 23 // Inserção de Propriedade

console.log(objetoMeuNomeCompleto);
console.log();

console.log('freeze(objetoMeuNomeCompleto)');
Object.freeze(objetoMeuNomeCompleto); // A partir desta operação, fica impossibilitado de criar, atualizar ou deletar propriedades deste objeto;

objetoMeuNomeCompleto.sexo = 'Feminino'; // Não é atribuido pois o objeto foi "congelado"

console.log(objetoMeuNomeCompleto);
console.log();

const objetoNomeMeuGato = { nome: 'Nietzsche', cor: 'Preto' };

console.log("Definição do objeto 'objetoNomeMeuGato': ");
console.log(objetoNomeMeuGato);
console.log();

console.log('seal(objetoNomeMeuGato): ');
Object.seal(objetoNomeMeuGato); // Permite atualizar propriedades apenas

console.log("Alterações no objeto: 'objetoNomeMeuGato'");
objetoNomeMeuGato.nome = 'Friedrich Nietzsche'; // Alteração de propriedade
delete objetoNomeMeuGato.cor; // Deleção de propriedade
objetoNomeMeuGato.peso = 5; // Inserção de Propriedade

console.log(objetoNomeMeuGato);
console.log();

try {
    
} catch (msgErro){
    console.log(`Não foi possivel realizar a operação! ${msgErro}`);
};

console.log();
console.log();
