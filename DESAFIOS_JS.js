/* DESAFIO: FORMATANDO NOME COMPLETO MODELO: "SOBRENOME ÚLTIMO NOME, PRIMEIRO NOME" */
console.log('DESAFIO: FORMATANDO NOME COMPLETO MODELO: "SOBRENOME ÚLTIMO NOME, PRIMEIRO NOME"');

const meuNomeCompleto = 'Bruno Elvis Pereira Silva';

function formatarNome (nomeCompleto) {
    const arrayNomeCompleto = nomeCompleto.split(' ');
    const primeiroNome = arrayNomeCompleto[0];
    const nomeSemPrimeiroNome = nomeCompleto.slice(nomeCompleto.indexOf(' ') + 1);

    return (arrayNomeCompleto[1] === undefined) ? nomeCompleto : `${nomeSemPrimeiroNome}, ${primeiroNome}`;
};

console.log(formatarNome(meuNomeCompleto));
console.log(formatarNome('Bruna Rodrigues Lima'));
console.log(formatarNome('Elvis Plesley'));
console.log(formatarNome('Nietzsche'));
console.log();

/* DESAFIO: VERIFICAR SE UMA PALAVRA É CLASSIFICADA COMO PALÍNDROMO */
console.log("DESAFIO: VERIFICAR SE UMA PALAVRA É CLASSIFICADA COMO PALÍNDROMO");

function verificarPalindromo(palavra) {
    palavraContraria = [...palavra].reverse().join().replaceAll(',', '');
    //palavraContraria = palavra.split('').reverse().join().replaceAll(',', '');

    return (palavra === palavraContraria);
};

const palindromo = 'TENET';

console.log('É Palíndromo', '(', palindromo, ') ?', (verificarPalindromo(palindromo)) ? 'Sim!' : 'Não!');
console.log();

/* DESAFIO: DESENVOLVER UM CONTADOR REGRESSIVO DE SEGUNDOS  */
console.log("DESAFIO: DESENVOLVER UM CONTADOR REGRESSIVO DE SEGUNDOS");

function iniciarContagemRegressiva(duracaoSegundos) {
    var timer = duracaoSegundos;

    const contagem = setInterval(function () {
        segundos = parseInt(timer % 60, 10);
        segundos = segundos < 10 ? "0" + segundos : segundos;

        console.log(segundos);

        if (--timer < 0) {
            timer = duracaoSegundos;
            clearInterval(contagem);
        };
    }, 1000);
};

console.log();

/* DESAFIO: DIAS RESTANTES PARA MEU ANIVERSÁRIO */
console.log("DESAFIO: DIAS RESTANTES PARA MEU ANIVERSÁRIO");

function diasRestantesParaMeuAniversario () {
    let dataAtual = new Date();
    // Zerar minutagem:
    /*dataAtual.setHours(0); // Zerar minutagem
    dataAtual.setMinutes(0);
    dataAtual.setSeconds(0);
    dataAtual.setMilliseconds(0);*/
    const dataAtualTS = +dataAtual; // Notação resumida para se obter o timestamp de uma data
    let anoAtual = dataAtual.getFullYear();

    //const dataMeuAniversario = new Date(1996, 0, 31);
    const dataAniversario = new Date(anoAtual, 5, 24);
    let dataAniversarioTS = +dataAniversario;

    const MINUTO = 60 * 1000;
    const HORA = 60 * MINUTO;
    const DIA = 24 * HORA;
    
    if(dataAniversarioTS < dataAtualTS) {
        dataAniversario.setFullYear(++anoAtual); // Incrementa em 1 o ano da data de aniversaário
        dataAniversarioTS = +dataAniversario; // Atualiza TS da data de aniversário
    };
    
    let diferencaDatasTS = dataAniversarioTS - dataAtualTS;

    const diferencaDiasTS = (diferencaDatasTS / DIA).toFixed();

    const diferencaHorasTS = Math.floor((diferencaDatasTS - (diferencaDiasTS * DIA)) / HORA);

    const diferencaMinutosTS = Math.floor((diferencaDatasTS - ((diferencaHorasTS * HORA) + (diferencaDiasTS * DIA))) / MINUTO);

    const diferencaSegundos = Math.floor((diferencaDatasTS - ((diferencaMinutosTS * MINUTO) + (diferencaHorasTS * HORA) + (diferencaDiasTS * DIA))) / 1000);

    console.log('Restam', diferencaDiasTS, 'dias,', diferencaHorasTS, 'horas,', diferencaMinutosTS, 'minutos e', diferencaSegundos, 'segundos', 'para seu aniversário!');
};

diasRestantesParaMeuAniversario();
console.log();

/* DESAFIO: REMOVER ITENS REPETIDOS DENTRO DE UM ARRAY E RETORNANDA UM ARRAY DE ITENS ÚNICOS */
console.log("DESAFIO: REMOVER ITENS REPETIDOS DENTRO DE UM ARRAY E RETORNANDA UM ARRAY DE ITENS ÚNICOS");

const numerosTeste1 = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8];
const numerosUnicosTeste1 = [...new Set(numerosTeste1)];

const numerosTeste2 = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8];
const numerosUnicosTeste2 = numerosTeste2.filter((valor, indice) => numerosTeste2.indexOf(valor) === indice);

console.log(numerosUnicosTeste1);
console.log();
console.log(numerosUnicosTeste2);
console.log();
console.log();

/* DESAFIO DE CLASSES ABSTRATAS: CRIARCONTA BANCÁRIA */
/*

1. Criar Conta Abstrata Chamada ContaBancaria 
PROPRIEDADES:
- cliente;
- numero;
- saldo.

MÉTODOS:
- depositar(valor);
- sacar(valor).

2. Criar Duas Classes que Herdam de ContaBancaria
- ContaCorrente -
PROPRIEDADES:
- limite.

- ContaPoupanca -
PROPRIEDADES:
- aniversario.
*/

class TransferenciaBancaria {
    static transferir(contaOrigem, contaDestino, valor) {
        if (!(contaOrigem instanceof ContaBancaria) || !(contaDestino instanceof ContaBancaria)) throw new Error(`Umas das Contas Bancárias é inválida!`);

        try{
            contaOrigem.sacar(valor);
            contaOrigem.depositar(valor);

        } catch (erro) {
            console.log(`Transferência não pode ser concluída, devido ao erro: ${erro.message}`);
        };
    };
};

class Cliente {
    constructor(nome, documento, tipoDocumento){
        if (this.constructor === Cliente) throw new Error('A classe Cliente é uma classe abstrata!');

        if (nome) this.nome = nome;
        if (documento) this.documento = documento;
        if (tipoDocumento) this.tipoDocumento = tipoDocumento;
    };
};

class PessoaFisica extends Cliente {
    constructor(nome, documento){
        super(nome, documento, 'CPF');
    };
};

class PessoaJuridica extends Cliente {
    constructor(nome, documento){
        super(nome, documento, 'CNPJ');
    };
};

class ContaBancaria {
    constructor(cliente, numero) {
        if (this.constructor === ContaBancaria) throw new Error('A classe ContaBancaria é uma classe abstrata!');

        if (cliente) this.cliente = cliente;
        if (numero) this.numero = numero;
        this.saldo = 0;
    };

    extrato () {
        console.log(`Seu saldo atual: R$ ${this.saldo},00`);
    };

    depositar (valor) {
        this.saldo += valor;
        console.log(`Você depositou o valor de R$ ${valor},00 com sucesso!`);
        console.log(`Saldo atual: R$ ${this.saldo},00`);
    };

    sacar () {
        throw new Error(`Método 'Sacar()' precisa ser implementado!`);
    };
};

class ContaPoupanca extends ContaBancaria {
    constructor (cliente, numero) {
        super(cliente, numero);

        this.dataCriacao = new Date().toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
    };

    sacar (valor) {
        const taxaSaque = 0;

        this.saldo -= valor;
        this.saldo -= taxaSaque;

        console.log(`Você sacou o valor de R$ ${valor},00 com sucesso!`);
        console.log(`Saldo atual: R$ ${this.saldo},00`);
    };
};

class ContaCorrente extends ContaBancaria {
    constructor (cliente, numero) {
        super(cliente, numero);

        this.dataCriacao = new Date().toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
        this.limiteSaque = 250;
    };

    sacar (valor) {
        if (valor > this.limiteSaque) throw new Error(`Você não possui limite para sacar acima de R$ ${this.limiteSaque},00 !`)

        const taxaSaque = 5;

        this.saldo -= valor;
        this.saldo -= taxaSaque;

        console.log(`Você sacou o valor de R$ ${valor},00 com sucesso!`);
        console.log(`Saldo atual: R$ ${this.saldo},00`);
    };
};

let clienteBruno = new PessoaFisica('Bruno', 155);
let clienteBruna = new PessoaJuridica('Bruna', 568);

let minhaContaP = new ContaPoupanca(clienteBruno, 50);
let minhaContaC = new ContaCorrente(clienteBruna, 55);

console.log(minhaContaP);
minhaContaP.depositar(1000);
minhaContaP.sacar(500);

console.log();

console.log(minhaContaC);
minhaContaC.depositar(500);
minhaContaC.sacar(100);

console.log();

TransferenciaBancaria.transferir(minhaContaC, minhaContaP, 100);

minhaContaC.extrato();
minhaContaP.extrato();

/* Verificar comportamento da função 'depositar' da classe 'ContaBancaria' */