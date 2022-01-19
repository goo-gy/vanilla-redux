import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// local
import { actionCreators } from '../store';

const ToDo = ({ toDo, deleteTodo }) => {
    const handleClickDel = (id) => {
        deleteTodo(id);
    };
    console.log(toDo.id);

    return (
        <li id={toDo.id}>
            <Link to={`/Detail/${toDo.id}`}>{toDo.text}</Link>
            <button
                onClick={() => {
                    handleClickDel(toDo.id);
                }}
            >
                Del
            </button>
        </li>
    );
};

const mapDispatchProps = (dispatch, ownProps) => {
    return {
        deleteTodo: (id) => {
            dispatch(actionCreators.deleteTodo(id));
        },
    };
};
export default connect(null, mapDispatchProps)(ToDo);
