import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteTodo = createAction('DELETE');

const reducer = createReducer([], {
    [addToDo]: (state, action) => [
        ...state,
        { text: action.payload, id: Date.now() },
    ],
    [deleteTodo]: (state, action) =>
        state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

export default store;
export const actionCreators = { addToDo, deleteTodo };
