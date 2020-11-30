import React from 'react';

import ToDo from './ToDo';

const ToDoList = ({ toDo, setToDo, filteredToDo }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredToDo.map((todo) => (
                    <ToDo
                        key={todo.id}
                        text={todo.text}
                        toDo={toDo}
                        todo={todo}
                        setToDo={setToDo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList; 