import React, { useState } from 'react';
import { connect } from 'react-redux';

//local
import { actionCreators } from '../store';
import ToDo from './ToDo';

const Home = ({ state, addToDo }) => {
    const [text, setText] = useState('');

    const handleChangeInput = (e) => {
        setText(e.target.value);
    };

    const handleClickAdd = (e) => {
        addToDo(text);
        e.preventDefault();
        setText('');
    };

    return (
        <>
            <h1>To Do</h1>
            <input type="text" value={text} onChange={handleChangeInput} />
            <button onClick={handleClickAdd}>Add</button>
            <ul>
                {state.map((toDo) => (
                    <ToDo key={toDo.id} toDo={toDo} />
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { state };
};
const mapDispatchProps = (dispatch, ownProps) => {
    return {
        addToDo: (text) => {
            dispatch(actionCreators.addToDo(text));
        },
    };
};
export default connect(mapStateToProps, mapDispatchProps)(Home);
