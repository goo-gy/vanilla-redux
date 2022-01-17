const inputTodo = document.getElementById('inputTodo');
const buttonAdd = document.getElementById('buttonAdd');
const listTodo = document.getElementById('listTodo');

const createTodo = (text) => {
    const li = document.createElement('li');
    li.innerText = text;
    listTodo.appendChild(li);
};

buttonAdd.addEventListener('click', () => {
    createTodo(inputTodo.value);
});
