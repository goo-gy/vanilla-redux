import React, { useState } from 'react';

const Home = () => {
    const [toDoList, setTodoList] = useState([]);
    const [text, setText] = useState('');

    const handleChangeInput = (e) => {
        setText(e.target.value);
    };

    const handleClickAdd = (e) => {
        e.preventDefault();
        setTodoList([...toDoList, { text: text, time: Date.now() }]);
        setText('');
    };

    const handleClickDel = (time) => {
        const updateTodoList = toDoList.filter((todo) => todo.time !== time);
        setTodoList(updateTodoList);
    };
    return (
        <>
            <h1>To Do</h1>
            <input type="text" value={text} onChange={handleChangeInput} />
            <button onClick={handleClickAdd}>Add</button>
            <ul>
                {toDoList.map((toDo) => (
                    <li id={toDo.time} key={toDo.time}>
                        {toDo.text}
                        <button
                            onClick={() => {
                                handleClickDel(toDo.time);
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

export default Home;
