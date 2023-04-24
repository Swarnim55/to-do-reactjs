import React, { useContext } from 'react';
import styles from './TodoList.module.css';
import Card from '../UI/Card';
import ctxToDo from '../../context/context-todo';
const TodoList = () => {
  const { todo } = useContext(ctxToDo);

  return (
    <Card className={styles.todolist}>
      <ul>
        {todo.map((data) => {
          return (
            <li key={data.id}>
              {data.desc} {data.date}{' '}
              {data.status === false ? 'Incomplete' : 'Complete'}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default TodoList;
