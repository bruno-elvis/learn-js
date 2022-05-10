/* EXERCICIO JS - CRIAR FUNÇÃO PARA CÁLCULO DE IMC COM CLASSIFICAÇÃO DE ÍNDICE CORPORAL
    Requisitos:
    -> Fórmula para cálculo do IMC: Peso / Altura²;
    -> Deve retornar um único número;
    -> Deve gerar erro ao receber parâmetros não numérico;
    -> Retorna erro caso não receba parâmetro.
*/

(function (){
    let imc = null;

    function calcularIMC(){

    let peso = arguments[0];
    let altura = arguments[1];
    let imc = null;

    try{
        if(arguments.length === 0){
            throw Error('A função não pode ter parâmetros vazios!');
        } else if(arguments.length < 2){
            throw Error('A função precisa receber mais de um parâmetro!');
        } else {
            for (indice = 0; indice < arguments.length; indice++){
                if (typeof arguments[indice] !== 'number'){
                    throw Error('O tipo do parâmetro não pode ser diferente de númerico!');
                }
            }

            imc = (peso / (Math.pow(altura, 2)));
        }
    } catch (erro) {
        console.log(erro.message);
    }

    return imc !== null && imc;
    }

    /CLASSIFICAÇÃO DO CALCULO DO IMC/
    function classificarIMC(imc){
        let classificacao = null;

        if (imc <= 0) {
            return 'Não definida.';

        } else if (imc <= 16.9){
            classificacao = 'Muito abaixo do peso.';
            return classificacao;

        } else if (imc <= 18.4) {
            classificacao = 'Abaixo do peso.';
            return classificacao;

        } else if (imc <= 24.9) {
            classificacao = 'Peso normal.';
            return classificacao;

        } else if (imc <= 29.9) {
            classificacao = 'Acima do peso';
            return classificacao;

        } else if (imc <= 34.9) {
            classificacao = 'Obesidade de grau 1.';
            return classificacao;

        } else if (imc <= 40) {
            classificacao = 'Obesidade de grau 2.';
            return classificacao;

        } else {
            classificacao = 'Obesidade de grau 3.';
            return classificacao;
        }
    }

    imc = calcularIMC(70, 1.78);
    console.log(imc);
    console.log(classificarIMC(imc));
    
    console.log();
    imc = calcularIMC(80, 1.60);
    console.log(imc);
    console.log(classificarIMC(imc));

    console.log();
    imc = calcularIMC(55);
    console.log(classificarIMC(imc));

    console.log();
    imc = calcularIMC();
    console.log(classificarIMC(imc));
})();