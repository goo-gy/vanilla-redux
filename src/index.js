import { createStore } from 'redux';

const ADD = 'ADD';
const REMOVE = 'REMOVE';

const inputTodo = document.getElementById('inputTodo');
const buttonAdd = document.getElementById('buttonAdd');
const listTodo = document.getElementById('listTodo');

// reducer
const reducerTodo = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, { text: action.text, date: Date.now() }];
        case REMOVE:
            const updateState = state.filter(
                (item) => item.date !== action.date
            );
            return updateState;
        default:
            return state;
    }
};

// store
const storeTodo = createStore(reducerTodo);

// handle
const AddTodo = (e) => {
    storeTodo.dispatch({ type: ADD, text: inputTodo.value });
};

const removeTodo = (e) => {
    storeTodo.dispatch({
        type: REMOVE,
        date: parseInt(e.target.parentNode.id),
    });
};

// subscribe
const handleChange = () => {
    const state = storeTodo.getState();
    listTodo.innerHTML = '';
    state.forEach((todo) => {
        const li = document.createElement('li');
        li.innerText = todo.text;
        li.id = todo.date;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'DEL';
        deleteButton.addEventListener('click', removeTodo);
        li.appendChild(deleteButton);
        listTodo.appendChild(li);
    });
};
storeTodo.subscribe(handleChange);

buttonAdd.addEventListener('click', AddTodo);
