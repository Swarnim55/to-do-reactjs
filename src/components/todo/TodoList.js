import React, { useContext, useEffect } from 'react';
import styles from './TodoList.module.css';
import Card from '../UI/Card';
import ctxToDo from '../../context/context-todo';
const TodoList = () => {
  const { todo, removeData, updateData, filterDate } = useContext(ctxToDo);

  const updateHandler = (id, desc, date) => {
    updateData(id, desc, date);
  };

  const removeHandler = (id) => {
    removeData(id);
  };
  let items;
  if (filterDate !== '') {
    const len = todo.filter((ele) => ele.date === filterDate).length;
    if (len === 0) {
      items = '';
    }
    items = todo.filter((ele) => ele.date === filterDate);
  }

  if (filterDate === '') {
    items = todo;
  }

  return (
    <Card className={styles.todolist}>
      <ul>
        {items != '' ? (
          items.map((data) => {
            const nDate = new Date(data.date);
            const monthName = new Intl.DateTimeFormat('en-US', {
              month: 'long',
            }).format;
            const month = monthName(nDate);
            const year = nDate.getFullYear();
            const day = ('0' + nDate.getDate()).slice(-2);

            return (
              <li key={data.id}>
                <Card className={styles.dateCard}>
                  <span>{day}</span>

                  <span>{month}</span>
                  <span>{year}</span>
                </Card>
                <div className={styles.descTxt}>{data.desc}</div>
                <button
                  type="button"
                  onClick={() => updateHandler(data.id, data.desc, data.date)}
                >
                  📝
                </button>
                <button type="button" onClick={() => removeHandler(data.id)}>
                  {' '}
                  🗑️
                </button>
              </li>
            );
          })
        ) : (
          <li> No Items Found for ({filterDate})</li>
        )}
      </ul>
    </Card>
  );
};

export default TodoList;
