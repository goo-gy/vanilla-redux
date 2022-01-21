import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteTodo = createAction('DELETE');

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            return [...state, { text: action.payload, id: Date.now() }];
        case deleteTodo.type:
            return state.filter((toDo) => toDo.id !== action.payload);
    }
    return state;
};
const store = createStore(reducer);

export default store;
export const actionCreators = { addToDo, deleteTodo };
