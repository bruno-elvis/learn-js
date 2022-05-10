/* EXERCICIO JS - CRIAR FUNÇÃO PARA CÁLCULO DE IMC "calcularIMC()"
    Requisitos:
    -> Fórmula para cálculo do IMC: Peso / Altura²;
    -> Deve retornar um único número;
    -> Deve gerar erro ao receber parâmetros não numérico;
    -> Retorna erro caso não receba parâmetro.
*/

(function (){
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

    return imc !== null && console.log(imc);
    }

    calcularIMC(70, 1.78);
    calcularIMC(55);
    calcularIMC();
})();