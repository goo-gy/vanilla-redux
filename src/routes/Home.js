import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const Home = ({ state, addToDo, deleteTodo }) => {
    const [text, setText] = useState('');

    const handleChangeInput = (e) => {
        setText(e.target.value);
    };

    const handleClickAdd = (e) => {
        addToDo(text);
        e.preventDefault();
        setText('');
    };

    const handleClickDel = (id) => {
        deleteTodo(id);
    };
    return (
        <>
            <h1>To Do</h1>
            <input type="text" value={text} onChange={handleChangeInput} />
            <button onClick={handleClickAdd}>Add</button>
            <ul>
                {state.map((toDo) => (
                    <li id={toDo.id} key={toDo.id}>
                        {toDo.text}
                        <button
                            onClick={() => {
                                handleClickDel(toDo.id);
                            }}
                        >
                            Del
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    console.log('mapState', ownProps);
    return { state };
};
const mapDispatchProps = (dispatch, ownProps) => {
    console.log('mapState', ownProps);
    return {
        addToDo: (text) => {
            dispatch(actionCreators.addToDo(text));
        },
        deleteTodo: (id) => {
            dispatch(actionCreators.deleteTodo(id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchProps)(Home);
