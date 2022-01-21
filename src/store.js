import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        addToDo: (state, action) => [
            ...state,
            { text: action.payload, id: Date.now() },
        ],
        deleteTodo: (state, action) =>
            state.filter((toDo) => toDo.id !== action.payload),
    },
});
const store = configureStore({ reducer: toDos.reducer });

export default store;
export const actionCreators = toDos.actions;
