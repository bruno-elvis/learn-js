/*
FUNÇÃO PARA CÁLCULO DE IMC COM CLASSIFICAÇÃO DE ÍNDICE CORPORAL

UTILIZANDO FUNÇÃO CALLBACK

*/

(function (){
    function calcularIMC(peso, altura, fnClassificacao) {
    let imc = null;

    try{
        if(arguments.length === 0){
            throw Error('A função não pode ter parâmetros vazios!');
        } else if(arguments.length < 2){
            throw Error('A função precisa receber mais de um parâmetro!');
        } else {
            for (indice = 0; indice < arguments.length; indice++){
                if (typeof arguments[indice] !== 'number' && typeof arguments[indice] !== 'function'){
                    throw Error('O tipo do parâmetro não pode ser diferente de númerico!');
                }
            }

            imc = (peso / (Math.pow(altura, 2)));
        }
    } catch (erro) {
        console.log(erro.message);
    }

    return imc !== null && `${imc}'\nClassificação: '${fnClassificacao(imc)}`;
    }

    /CLASSIFICAÇÃO DO CALCULO DO IMC/
    function classificarIMC(imc) {
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

    console.log(calcularIMC(70, 1.78, classificarIMC));
})();