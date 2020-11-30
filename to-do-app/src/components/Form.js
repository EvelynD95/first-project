import React from 'react';

const Form = ({ inputText, setInputText, toDo, setToDo, setStatus }) => {
    //Javascript code and function
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };

    const submitToDoHandler = (event) => {
        event.preventDefault();
        setToDo([
            ...toDo,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText('');
    };

    const statusHandler = (event) => {
        setStatus(event.target.value)
    };

    return (
        <form>
            <input
                value={inputText}
                type="text"
                className="todo-input"
                onChange={inputTextHandler}
            />
            <button className="todo-button" type="submit" onClick={submitToDoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
}

export default Form;