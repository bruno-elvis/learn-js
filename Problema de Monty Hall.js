/* Prova de Conceito - Paradoxo de Monty Hall */
const CAIXA_A = 'A';
const CAIXA_B = 'B';
const CAIXA_C = 'C';

/* POSSIBILIDADE 1: TROCANDO A CAIXA */
function iniciarPartidasTrocandoEscolha(quantidadePartidas) {
    let rodadasGanhas = 0;
    let rodadasPerdidas = 0;

    for (let tentativas = 1; tentativas <= quantidadePartidas; tentativas++) {

        let caixaPremiada = parseInt(Math.random() * 3);
        let caixaEscolhida = parseInt(Math.random() * 3);
        let caixaAberta = parseInt(Math.random() * 3);

        (caixaPremiada === 0) ? caixaPremiada = CAIXA_A : (caixaPremiada === 1) ? caixaPremiada = CAIXA_B : caixaPremiada = CAIXA_C;
        (caixaEscolhida === 0) ? caixaEscolhida = CAIXA_A : (caixaEscolhida === 1) ? caixaEscolhida = CAIXA_B : caixaEscolhida = CAIXA_C;
        (caixaAberta === 0) ? caixaAberta = CAIXA_A : (caixaAberta === 1) ? caixaAberta = CAIXA_B : caixaAberta = CAIXA_C;

        if (caixaAberta === caixaPremiada && caixaEscolhida === caixaPremiada) {
            rodadasGanhas++;
        } else if (caixaAberta === caixaPremiada && caixaEscolhida !== caixaPremiada) {
            rodadasPerdidas++;
        } else if (caixaAberta !== caixaPremiada && caixaEscolhida !== caixaAberta) {
            caixaEscolhida = ['A', 'B', 'C'].find(v => v !== caixaAberta && v !== caixaEscolhida);

            (caixaEscolhida === caixaPremiada) ? rodadasGanhas++ : rodadasPerdidas++;
        };
    };

    return console.log(`Partidas ganhas: ${rodadasGanhas}, rodadas perdidas: ${rodadasPerdidas}.`);
};

console.log('Resultado das partidas trocando escolha: ');
iniciarPartidasTrocandoEscolha(1000);
console.log();

/* POSSIBILIDADE 2: NÃO EFETUA A TROCA DA CAIXA */
function iniciarPartidasSemTrocarEscolha(quantidadePartidas) {
    let rodadasGanhas = 0;
    let rodadasPerdidas = 0;

    for (let tentativas = 1; tentativas <= quantidadePartidas; tentativas++) {

        let caixaPremiada = parseInt(Math.random() * 3);
        let caixaEscolhida = parseInt(Math.random() * 3);
        let caixaAberta = parseInt(Math.random() * 3);

        (caixaPremiada === 0) ? caixaPremiada = CAIXA_A : (caixaPremiada === 1) ? caixaPremiada = CAIXA_B : caixaPremiada = CAIXA_C;
        (caixaEscolhida === 0) ? caixaEscolhida = CAIXA_A : (caixaEscolhida === 1) ? caixaEscolhida = CAIXA_B : caixaEscolhida = CAIXA_C;
        (caixaAberta === 0) ? caixaAberta = CAIXA_A : (caixaAberta === 1) ? caixaAberta = CAIXA_B : caixaAberta = CAIXA_C;

        if (caixaAberta === caixaPremiada && caixaEscolhida === caixaPremiada) {
            rodadasGanhas++;
        } else if (caixaAberta === caixaPremiada && caixaEscolhida !== caixaPremiada) {
            rodadasPerdidas++;
        } else if (caixaAberta !== caixaPremiada && caixaEscolhida !== caixaAberta) {
            (caixaEscolhida === caixaPremiada) ? rodadasGanhas++ : rodadasPerdidas++;
        };
    };

    return console.log(`Partidas ganhas: ${rodadasGanhas}, rodadas perdidas: ${rodadasPerdidas}.`);
};

console.log('Resultado das partidas sem trocar escolha: ');
iniciarPartidasSemTrocarEscolha(1000);
console.log();