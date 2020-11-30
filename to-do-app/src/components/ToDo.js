import React from 'react';

const ToDo = ({ text, todo, toDo, setToDo }) => {
    //Events
    const deleteHandler = () => {
        setToDo(toDo.filter(element =>
            element.id !== todo.id
        ))
    };

    const completeHandler = () => {
        setToDo(toDo.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        }));
    };

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {text}
            </li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'>{text}</i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div >
    );
}

export default ToDo;