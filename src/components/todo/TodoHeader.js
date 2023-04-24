import React, { useContext, useRef } from 'react';
import styles from './TodoHeader.module.css';
import Card from '../UI/Card';
import ctxToDo from '../../context/context-todo';

const TodoHeader = () => {
  const { todo, filterData, filterDate } = useContext(ctxToDo);

  const inputDate = useRef();

  const filterHandler = () => {
    console.log(inputDate.current.value);
    filterData(inputDate.current.value);
  };

  return (
    <Card className={styles.todo}>
      <header>
        <div className="title">Your To-Do's</div>
      </header>

      <main>
        <Card className={styles.card}>Total: {todo.length}</Card>
        <Card className={styles.card}>
          Completed: {todo.filter((ele) => ele.status === true).length}
        </Card>
        <Card className={styles.card}>
          <input
            type="date"
            defaultValue={filterDate}
            onChange={filterHandler}
            ref={inputDate}
          />
        </Card>
      </main>
    </Card>
  );
};

export default TodoHeader;
