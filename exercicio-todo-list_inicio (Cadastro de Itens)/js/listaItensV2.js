; (function () {
    "use strict"
    /* Obtendo elementos HTML para manipulação */
    const formLista = document.getElementById('todo-add');
    const inputItem = document.getElementById('item-input');
    const btnAddItem = document.getElementById('add-item');
    const ulListaItens = document.getElementById('todo-list');
    //const itensLista = document.getElementById('todo-list').children;
    const feedBackMSG = document.getElementById('feedbackMessage');

    /* Definição da fonte de dados */
    let arrayRegistros = [{
        nome: 'Registro 1',
        data: new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' }),
        concluido: false
    },{
        nome: 'Registro 2',
        data: new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' }),
        concluido: true
    }];

    /* Adição de eventos nos elementos principais */
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

        exibirRegistros();
    };

    function exibirRegistros() {
        ulListaItens.innerHTML = ''; // limpa as li's existentes no HTML, se houver

        arrayRegistros.forEach(registros => ulListaItens.appendChild(gerarLiRegistros(registros)));
    };

    function gerarLiRegistros(objRegistros) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const buttonCheck = document.createElement('button')
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
        containerEdicao.appendChild(buttonEditContainer);
        buttonCancelarContainer.className = 'cancelButton';
        buttonCancelarContainer.textContent = 'Cancelar';
        containerEdicao.appendChild(buttonCancelarContainer);

        buttonCheck.className = 'button-check';
        buttonCheck.title = 'Marcar como concluído';

        li.className = 'todo-item';

        p.className = 'task-name';
        p.textContent = objRegistros.nome;

        iEditButton.className = 'fas fa-edit';
        iEditButton.title = 'Editar';
        iEditButton.appendChild(containerEdicao);

        iDeleteButton.className = 'fas fa-trash-alt';
        iDeleteButton.title = 'Excluir';

        li.appendChild(buttonCheck);
        li.appendChild(p);
        li.appendChild(iEditButton);
        li.appendChild(iDeleteButton);

        buttonCheck.addEventListener('click', evento => { //Atribuição de evento no elemento de ícone de checkbox, para definir se foi concluido ou não 
            const registroSelecionado = evento.target.parentElement.querySelector('.task-name').textContent;
            const indiceRegistroSelecionado = arrayRegistros.findIndex(obj => obj.nome == registroSelecionado);

            if (arrayRegistros[indiceRegistroSelecionado].concluido) {
                arrayRegistros[indiceRegistroSelecionado].concluido = false;
            } else if (arrayRegistros[indiceRegistroSelecionado].concluido === false) {
                arrayRegistros[indiceRegistroSelecionado].concluido = true;
            };
        });

        iEditButton.addEventListener('click', evento => {
            const registroSelecionado = evento.target.parentElement.querySelector('.task-name').textContent;
            const divContainer = evento.target.firstChild;

            divContainer.firstChild.value = registroSelecionado;

            divContainer.style.display = 'flex';
        });

        iDeleteButton.addEventListener('click', evento => { //Atribuição de evento no elemento de ícone de lixeira, para deleção de registros da fonte de dados 
            const registroSelecionado = evento.target.parentElement.querySelector('.task-name').textContent; //Obtem registro selecionado, o qual recebeu o evento de "click"
            const indiceRegistroSelecionado = arrayRegistros.findIndex(obj => obj.nome == registroSelecionado); //Obtem posição (índice) do objeto da fonte de dados (array de objetos)

            arrayRegistros.splice(indiceRegistroSelecionado, 1); //Remove o elemento na posição passada por parâmetro (altera o array original)

            exibirRegistros(); //Atualiza a lista de registros
            
            showErrorMessage(`"${registroSelecionado}" foi excluido!`); //Chamando método que exibe mensagem de feedback passado a string a ser exibida

            setTimeout(closeErrorMessage, 3000); //Defini um tempo de espera para execução de uma função, neste caso chama função que fecha a mensagem de feedback
        });

        adicionarEventoLi(li);

        return li;
    };
    
    function adicionarEventoLi(li) {
        li.addEventListener("click", () => console.log(arrayRegistros));
    };

    /* Exibir/Ocultar mensagem de Feedback de erro */
    function showErrorMessage (msg) {
        feedBackMSG.firstElementChild.textContent = msg;

        feedBackMSG.lastElementChild.style.cursor = 'pointer';

        //feedBackMSG.setAttribute('class', 'show'); //Substitui o atributo do elemento, não é uma boa pratica, pois um elemento pode possuir varias classes de estilo
        feedBackMSG.classList.add('show');
    };

    function closeErrorMessage () {
        //feedBackMSG.setAttribute('class', 'hiden');
        feedBackMSG.classList.remove('show');
        
        inputItem.focus();
    };

})();