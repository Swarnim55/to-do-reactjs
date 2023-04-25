import React, { useContext } from 'react';
import styles from './TodoList.module.css';
import Card from '../UI/Card';
import ctxToDo from '../../context/context-todo';
const TodoList = () => {
  const { todo, removeData, updateData, filterDate, updateStatus } =
    useContext(ctxToDo);

  const updateHandler = (id, desc, date) => {
    updateData(id, desc, date);
  };

  const removeHandler = (id) => {
    removeData(id);
  };

  const statusHandler = (id, status) => {
    updateStatus(id, status);
  };

  let items;
  if (filterDate !== '') {
    const len = todo.filter((ele) => ele.date === filterDate).length;

    if (len === 0) {
      items = '';
    } else {
      items = todo.filter((ele) => ele.date === filterDate);
    }
  }

  if (filterDate === '') {
    items = todo;
  }

  return (
    <Card className={styles.todolist}>
      <ul>
        {items !== '' ? (
          items.map((data) => {
            const nDate = new Date(data.date);
            const monthName = new Intl.DateTimeFormat('en-US', {
              month: 'long',
            }).format;
            const month = monthName(nDate);
            const year = nDate.getFullYear();
            const day = ('0' + nDate.getDate()).slice(-2);

            return (
              <li
                key={data.id}
                className={data.status ? styles['complete'] : ''}
              >
                <Card className={styles.dateCard}>
                  <span>{day}</span>

                  <span>{month}</span>
                  <span>{year}</span>
                </Card>
                <div className={styles.descTxt}>
                  <div className={styles.txtData}>{data.desc}</div>
                  <div className={styles.menu}>
                    <li
                      onClick={() =>
                        updateHandler(data.id, data.desc, data.date)
                      }
                    >
                      Edit
                    </li>
                    <li onClick={() => statusHandler(data.id, data.status)}>
                      {data.status ? 'Reset' : 'Complete'}
                    </li>
                    <li onClick={() => removeHandler(data.id)}>Delete</li>
                  </div>
                </div>
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
