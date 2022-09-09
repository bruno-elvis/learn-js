; (function () {
    "use strict"
    /* Obtendo elementos HTML para manipulação */
    const formLista = document.getElementById('todo-add');
    const inputItem = document.getElementById('item-input');
    //const buttonAddItem = document.getElementById('add-item'); //Botão adicioar
    const ulListaItens = document.getElementById('todo-list');
    const feedBackMSG = document.getElementById('feedbackMessage');

    /* Definição e manipulação da fonte de dados */
    let arrayRegistros = obterDadosLS();/*[{
        nome: 'Registro 1',
        data: new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' }),
        concluido: true
    }, {
        nome: 'Registro 2',
        data: new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' }),
        concluido: false
    }];*/

    function obterDadosLS() {
        let registrosLS = JSON.parse(localStorage.getItem('registros'));
        return registrosLS && registrosLS.length ? registrosLS : [] //Tratamento.. quando o localStorage foi excluido, não for definido, não retorne nulo e quebre as tentativas do código de percorre-lo ao recarregar a página
    };

    function gravarDadosLS() {
        localStorage.setItem('registros', JSON.stringify(arrayRegistros));
    };

    gravarDadosLS();

    /* Adição de eventos nos elementos principais */
    //document.getElementsByTagName('body').addEventListener('load', () => {setTimeout(document.getElementById('loading').style.display.remove(), 3000)});
    formLista.addEventListener('submit', addItemLista);
    feedBackMSG.lastElementChild.addEventListener('click', closeErrorMessage);

    exibirRegistros();

    /* Métodos para adicionar registros na lista */
    function addItemLista(evento) {
        evento.preventDefault(); //Impede o recarregamento da pagina e envio das informações após evendo de "submit"

        inserirItem(inputItem.value);

        inputItem.value = ''; //Limpa input
        inputItem.focus(); //Defini a posição do ponteiro no "input" principal para adição de novos registros
    };

    function inserirItem(input) {
        arrayRegistros.push({
            nome: input,
            data: new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' }),
            concluido: false
        });

        gravarDadosLS();
        exibirRegistros();
    };

    function exibirRegistros() {
        ulListaItens.innerHTML = ''; // limpa as li's existentes no HTML, se houver

        arrayRegistros.forEach(registros => ulListaItens.appendChild(gerarLiRegistros(registros)));
    };

    function gerarLiRegistros(objRegistros) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const buttonCheck = document.createElement('button');
        const iButtonCheck = document.createElement('i');
        const iEditButton = document.createElement('i');
        const iDeleteButton = document.createElement('i');
        const containerEdicao = document.createElement('div');
        const inputContainer = document.createElement('input');
        const buttonEditContainer = document.createElement('button');
        const buttonCancelarContainer = document.createElement('button');

        containerEdicao.className = 'editContainer';
        inputContainer.className = 'editInput';
        inputContainer.type = 'text';
        containerEdicao.appendChild(inputContainer);
        buttonEditContainer.className = 'editButton';
        buttonEditContainer.textContent = 'Editar';
        buttonEditContainer.setAttribute('nomeAlvoEvento', 'botaoEdicaoContainer');
        containerEdicao.appendChild(buttonEditContainer);
        buttonCancelarContainer.className = 'cancelButton';
        buttonCancelarContainer.textContent = 'Cancelar';
        buttonCancelarContainer.setAttribute('nomeAlvoEvento', 'botaoCancelarContainer');
        containerEdicao.appendChild(buttonCancelarContainer);

        buttonCheck.className = 'button-check';
        buttonCheck.title = 'Marcar como concluído';
        buttonCheck.setAttribute('nomeAlvoEvento', 'botaoCheck');
        if (objRegistros.concluido) {
            iButtonCheck.className = 'fas fa-check';
        } else if (objRegistros.concluido === false) {
            iButtonCheck.className = 'fas fa-check displayNone';
        };
        iButtonCheck.setAttribute('nomeAlvoEvento', 'botaoCheck');
        buttonCheck.appendChild(iButtonCheck);

        li.className = 'todo-item';
        li.setAttribute('nomeAlvoEvento', 'itemLista');

        p.className = 'task-name';
        p.textContent = objRegistros.nome;
        p.setAttribute('nomeAlvoEvento', 'nomeItem');

        iEditButton.className = 'fas fa-edit';
        iEditButton.title = 'Editar';
        li.appendChild(containerEdicao);
        iEditButton.setAttribute('nomeAlvoEvento', 'botaoEditar');

        iDeleteButton.className = 'fas fa-trash-alt';
        iDeleteButton.title = 'Excluir';
        iDeleteButton.setAttribute('nomeAlvoEvento', 'botaoDeletar');

        li.appendChild(buttonCheck);
        li.appendChild(p);
        li.appendChild(iEditButton);
        li.appendChild(iDeleteButton);

        adicionarEventoLi(li);

        return li;
    };

    function adicionarEventoLi(li) {
        li.addEventListener("click", acaoClicarUL);
    };

    function acaoClicarUL(evento) {
        const elementoAlvo = evento.target;
        const atributoAlvo = evento.target.getAttribute('nomeAlvoEvento');
        //const registroSelecionado = elementoAlvo.parentElement.querySelector('.task-name').textContent; //Obtem registro selecionado, o qual recebeu o evento de "click"
        //const indiceRegistroSelecionado = arrayRegistros.findIndex(registro => registro.nome == registroSelecionado); //Obtem posição (índice) do objeto da fonte de dados (array de objetos)

        if (!atributoAlvo) return;

        const acoesBotoes = {
            itemLista: () => console.log(elementoAlvo),
            nomeItem: () => console.log(elementoAlvo),
            botaoCheck: () => {
                if (elementoAlvo.tagName === 'BUTTON') {
                    const registroSelecionado = elementoAlvo.parentElement.querySelector('.task-name').textContent;
                    const indiceRegistroSelecionado = arrayRegistros.findIndex(registro => registro.nome === registroSelecionado);

                    if (arrayRegistros[indiceRegistroSelecionado].concluido) {
                        arrayRegistros[indiceRegistroSelecionado].concluido = false;

                        elementoAlvo.firstChild.classList.add('displayNone');

                        gravarDadosLS();
                    } else if (arrayRegistros[indiceRegistroSelecionado].concluido === false) {
                        arrayRegistros[indiceRegistroSelecionado].concluido = true;

                        elementoAlvo.firstChild.classList.remove('displayNone')

                        gravarDadosLS();
                    };
                } else if (elementoAlvo.tagName === 'I') {
                    const registroSelecionado = elementoAlvo.parentElement.parentElement.querySelector('.task-name').textContent;;
                    const indiceRegistroSelecionado = arrayRegistros.findIndex(registro => registro.nome === registroSelecionado);

                    elementoAlvo.classList.add('displayNone');

                    arrayRegistros[indiceRegistroSelecionado].concluido = false;

                    gravarDadosLS();
                }
            },
            botaoEditar: () => {
                const registroSelecionado = elementoAlvo.parentElement.querySelector('.task-name').textContent;
                const divContainer = elementoAlvo.parentElement.querySelector('.editContainer');

                [...ulListaItens.querySelectorAll('.editContainer')].forEach(div => div.removeAttribute('style')); //Remove o estilo dos conteiner's existentes para que no evento 'editar' não repita a chamadas dos botões deste (editar, cancelar)

                divContainer.firstChild.value = registroSelecionado;

                divContainer.style.display = 'flex';
            },
            botaoDeletar: () => {
                const registroSelecionado = elementoAlvo.parentElement.querySelector('.task-name').textContent;
                const indiceRegistroSelecionado = arrayRegistros.findIndex(registro => registro.nome === registroSelecionado);

                arrayRegistros.splice(indiceRegistroSelecionado, 1); //Remove o elemento na posição passada por parâmetro (altera o array original)

                gravarDadosLS();
                exibirRegistros(); //Atualiza a lista de registros

                showErrorMessage(`"${registroSelecionado}" foi excluido!`); //Chamando método que exibe mensagem de feedback passado a string a ser exibida

                setTimeout(closeErrorMessage, 3000); //Defini um tempo de espera para execução de uma função, neste caso chama função que fecha a mensagem de feedback
            },
            botaoEdicaoContainer: () => {
                const inputContainer = elementoAlvo.previousElementSibling.value;
                const registroSelecionado = elementoAlvo.parentElement.parentElement.querySelector('.task-name').textContent;
                const indiceRegistroSelecionado = arrayRegistros.findIndex(registro => registro.nome === registroSelecionado);

                arrayRegistros[indiceRegistroSelecionado].nome = inputContainer;

                evento.target.parentElement.style.display = 'none';

                gravarDadosLS();
                exibirRegistros();
            },
            botaoCancelarContainer: () => {
                evento.target.parentElement.style.display = 'none';
            }
        };

        if (Object.keys(acoesBotoes).find(acao => { return acao === atributoAlvo })) {
            acoesBotoes[atributoAlvo]();
        };
    };

    /* Exibir/Ocultar mensagem de Feedback de erro */
    function showErrorMessage(msg) {
        feedBackMSG.firstElementChild.textContent = msg;

        feedBackMSG.lastElementChild.style.cursor = 'pointer';

        //feedBackMSG.setAttribute('class', 'show'); //Substitui o atributo do elemento, não é uma boa pratica, pois um elemento pode possuir varias classes de estilo
        feedBackMSG.classList.add('show');
    };

    function closeErrorMessage() {
        //feedBackMSG.setAttribute('class', 'hiden');
        feedBackMSG.classList.remove('show');

        inputItem.focus();
    };
})();