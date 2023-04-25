import React, { useState } from 'react';
import TodoHeader from './components/todo/TodoHeader';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import ctxToDo from './context/context-todo';
const App = () => {
  // List State
  const [todo, setTodo] = useState([
    { id: 1, desc: 'Demo', date: '2023-04-24', status: true },
  ]);

  // Updating Data State
  const [upData, setUpData] = useState('');

  // Filter Date State
  const defaultDate = new Date().toISOString().split('T')[0];
  const [filterDate, setFilterDate] = useState(defaultDate);

  // Add Data to List Handle
  const addData = (newData) => {
    setTodo([newData, ...todo]);
  };

  //Filter Data on List Handle
  const filterData = (newDate) => {
    setFilterDate(newDate);
  };

  //  Set Data to Update State Handle
  const updateData = (id, newDesc, newDate) => {
    const u_date = new Date(newDate);
    const u_year = u_date.getFullYear();
    const u_day = ('0' + u_date.getDate()).slice(-2);
    const u_month = ('0' + (u_date.getMonth() + 1)).slice(-2);
    const upDate = `${u_year}-${u_month}-${u_day}`;

    setUpData({ id: id, desc: newDesc, date: upDate, status: false });
  };

  // Save Updated Data Function
  const saveUpdateData = (updatedData) => {
    const toModifyDate = new Date(updatedData.date).toISOString().split('T')[0];
    const toModifyData = todo.map((ele) => {
      if (ele.id === updatedData.id) {
        return {
          ...ele,
          desc: updatedData.desc,
          date: toModifyDate,
          status: updatedData.status,
        };
      } else {
        return ele;
      }
    });
    setTodo(toModifyData);
    setUpData('');
  };

  // Delete Data Handle
  const removeData = (dataId) => {
    setTodo(todo.filter((item) => item.id !== dataId));
  };

  return (
    <ctxToDo.Provider
      value={{
        todo,
        addData,
        filterDate,
        filterData,
        removeData,
        upData,
        updateData,
        saveUpdateData,
      }}
    >
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </ctxToDo.Provider>
  );
};

export default App;
