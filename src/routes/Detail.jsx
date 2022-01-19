import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({ toDoList }) => {
    const { id } = useParams();
    const toDo = toDoList.find((toDo) => toDo.id === parseInt(id));
    return (
        <div>
            <h1>Details</h1>
            <div>
                {toDo ? (
                    <>
                        <h3>ID: {toDo?.id}</h3>
                        <h3>Text: {toDo?.text}</h3>
                    </>
                ) : (
                    <h3>Not Found</h3>
                )}
            </div>
        </div>
    );
};

const mapStateProps = (state, OwnProps) => {
    return { toDoList: state };
};
export default connect(mapStateProps, null)(Detail);
