// selectors 

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

addTodo = (e) => {
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    //li creating

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //trash button

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to list

    todoList.appendChild(todoDiv);

    //clear input value

    todoInput.value = '';
}

deleteCheck = (e) => {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') { //delete todo
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }

    if (item.classList[0] === 'complete-btn') { //check mark
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


//events 

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);