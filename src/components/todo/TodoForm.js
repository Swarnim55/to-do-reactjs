import React, { useRef, useContext } from 'react';
import styles from './TodoForm.module.css';
import Card from '../UI/Card';
import ctxToDo from '../../context/context-todo';

const TodoForm = () => {
  const { addData, upData, saveUpdateData } = useContext(ctxToDo);

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
  const updateHandler = (e) => {
    e.preventDefault();
    const newDesc = descInput.current.value;
    const newDate = dateInput.current.value;
    const updatedData = {
      id: upData.id,
      desc: newDesc,
      date: newDate,
      status: false,
    };

    saveUpdateData(updatedData);
    e.target.reset();
  };
  return (
    <Card
      className={
        upData !== '' ? `${styles.update} ${styles.form}` : styles.form
      }
    >
      <form onSubmit={upData !== '' ? updateHandler : submitHandler}>
        <input
          type="text"
          placeholder="Add Items To Your List"
          ref={descInput}
          defaultValue={upData !== '' ? upData.desc : ''}
        />
        <input
          type="date"
          defaultValue={upData !== '' ? upData.date : ''}
          ref={dateInput}
        />
        <button type="submit">{upData !== '' ? '📝' : '+'}</button>
      </form>
    </Card>
  );
};

export default TodoForm;
