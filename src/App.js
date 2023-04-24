import React, { useState } from 'react';
import TodoHeader from './components/todo/TodoHeader';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import ctxToDo from './context/context-todo';
const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, desc: 'Make Coffee', date: '04-24-2023', status: true },
    { id: 2, desc: 'Make Tea', date: '04-24-2023', status: false },
  ]);
  const defaultDate = new Date().toISOString().split('T')[0];
  const [filterDate, setFilterDate] = useState(defaultDate);

  const addData = (newData) => {
    setTodo([...todo, newData]);
  };

  const filterData = (newDate) => {
    setFilterDate(newDate);
  };

  return (
    <ctxToDo.Provider value={{ todo, addData, filterDate, filterData }}>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </ctxToDo.Provider>
  );
};

export default App;
