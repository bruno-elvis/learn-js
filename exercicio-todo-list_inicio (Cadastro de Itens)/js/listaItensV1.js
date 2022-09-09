; (function () {
    "use strict"

    const formLista = document.getElementById('todo-add');
    const inputItem = document.getElementById('item-input');
    const btnAddItem = document.getElementById('add-item');
    const ulListaItem = document.getElementById('todo-list');
    const itensLista = document.getElementById('todo-list').children; //document.getElementsByTagName('li');

    let arrayRegistros = [{
        name: 'Registro 1',
        data: Date.now(),
        completo: false
    },{
        name: 'Registro 2',
        data: Date.now(),
        completo: false
    }]

    formLista.addEventListener('submit', addItemLista);

    /* Adicionar registros na lista */
    function addItemLista(evento) {
        evento.preventDefault();
        
        inserirItem(inputItem.value);

        inputItem.value = '';
        inputItem.focus();
    };

    function inserirItem(input) {
        //debugger
        const li = document.createElement('li');
        const p = document.createElement('p');
        const button = document.createElement('button')
        const iEdit = document.createElement('i');
        const iDelete = document.createElement('i');

        button.className = 'button-check';
        li.className = 'todo-item';
        p.className = 'task-name';
        p.textContent = input;
        iEdit.className = 'fas fa-edit';
        iDelete.className = 'fas fa-trash-alt';

        li.appendChild(button);
        li.appendChild(p);
        li.appendChild(iEdit);
        li.appendChild(iDelete);
        ulListaItem.appendChild(li);

        adicionarEventoLi(li);
    };

    function adicionarEventoLi(li) {
        li.addEventListener("click", () => console.log(li.textContent));
    };

    //[...itensLista].forEach(li => adicionarEventoLi(li));
    arrayRegistros.forEach(li => adicionarEventoLi(li));

})();