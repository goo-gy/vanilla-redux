import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

// Reducer
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE:
            return state.filter((toDo) => toDo.id !== action.id);
    }
    return state;
};

// Store
const store = createStore(reducer);

// Action Creator
const addToDo = (text) => {
    return { type: ADD, text };
};

const deleteTodo = (id) => {
    return { type: DELETE, id };
};

export default store;
export const actionCreators = { addToDo, deleteTodo };
