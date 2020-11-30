import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import ToDoList from './components/ToDoList';

export default function App() {
  //State
  const [inputText, setInputText] = useState('');
  const [toDo, setToDo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredToDo, setFilteredToDo] = useState([]);

  //Run once when the app starts

  useEffect(() => {
    getLocalToDo();
  }, []);

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalToDo();
  }, [toDo, status]);

  //Functions 
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredToDo(toDo.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDo(toDo.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDo(toDo);
        break;
    }
  };

  //Save to local strorage  
  const saveLocalToDo = () => {
    localStorage.setItem('toDo', JSON.stringify(toDo));
  };

  const getLocalToDo = () => {
    if (localStorage.getItem('toDo') === null) {
      localStorage.setItem('toDo', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('toDo'));
      setToDo(todoLocal);
    }
  }

  return (
    <div className='App'>
      <header>
        <h1>To do list</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toDo={toDo}
        setToDo={setToDo}
        setStatus={setStatus}
      />
      <ToDoList
        toDo={toDo}
        setToDo={setToDo}
        filteredToDo={filteredToDo}
      />
    </div>
  );
}