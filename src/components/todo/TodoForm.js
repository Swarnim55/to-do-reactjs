import React, { useRef, useContext } from 'react';
import styles from './TodoForm.module.css';
import Card from '../UI/Card';
import ctxToDo from '../../context/context-todo';

const TodoForm = () => {
  const { addData } = useContext(ctxToDo);

  const descInput = useRef();
  const dateInput = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const listId = Math.ceil(Math.random() * 1000000);
    const inputDesc = descInput.current.value;
    const inputDate = dateInput.current.value;

    const newData = {
      id: listId,
      desc: inputDesc,
      date: inputDate,
      status: false,
    };
    addData(newData);
    e.target.reset();
  };
  return (
    <Card className={styles.form}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add Items To Your List"
          ref={descInput}
        />
        <input type="date" default="1990/01/01" ref={dateInput} />
        <button type="submit">+</button>
      </form>
    </Card>
  );
};

export default TodoForm;
