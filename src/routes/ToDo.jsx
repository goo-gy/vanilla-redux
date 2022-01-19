import React from 'react';
import { connect } from 'react-redux';

// local
import { actionCreators } from '../store';

const ToDo = ({ toDo, deleteTodo }) => {
    const handleClickDel = (id) => {
        deleteTodo(id);
    };

    return (
        <li id={toDo.id}>
            {toDo.text}
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
    console.log(ownProps);
    return {
        deleteTodo: (id) => {
            dispatch(actionCreators.deleteTodo(id));
        },
    };
};
export default connect(null, mapDispatchProps)(ToDo);
