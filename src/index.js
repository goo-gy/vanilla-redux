import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

// store & reducer
const countReducer = (count = 0, action) => {
    if (action.type === 'ADD') return count + 1;
    else if (action.type === 'MINUS') return count - 1;
    return count;
};
const countStore = createStore(countReducer);

// initial
number.innerText = countStore.getState();

// dispatch
add.addEventListener('click', () => {
    countStore.dispatch({ type: 'ADD' });
});
minus.addEventListener('click', () => {
    countStore.dispatch({ type: 'MINUS' });
});

// subscribe
const onChange = () => {
    number.innerText = countStore.getState();
};
countStore.subscribe(onChange);
