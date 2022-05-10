/* EXERCICIO JS - CRIAR FUNÇÃO "calcularMedia()"
    Requisitos:
    -> Pode receber um ou mais valores numéricos; OK
    -> Deve retornar um único número; OK
    -> Gerar erro caso receba como parâmetro dado diferente de número; OK
    -> Retorna zero caso não receba paramêtro. OK

*/

(function(){
    function calcularMedia(){
        let somaParametros = null;

        try {
            for (indice = 0; indice < arguments.length; indice++) {
                if (typeof(arguments[indice]) !== 'number') {
                    somaParametros -= arguments.length;
                    throw Error('Parâmetro não pode ser uma string!');
                } else {
                    somaParametros += arguments[indice];
                }
            }
        } catch (erro) {
            console.log(erro.message);
        }
        
        somaParametros = (somaParametros / arguments.length);
        
        (arguments.length === 0) ? somaParametros = 0 : somaParametros;
        //OU:
        //somaParametros = (somaParametros / arguments.length) || 0;

        return (somaParametros !== 0) && console.log(somaParametros);
    }
    
    calcularMedia(5, 10, 15);
    console.log();
    calcularMedia();
    console.log();
    calcularMedia(1, 2, '3');
})();