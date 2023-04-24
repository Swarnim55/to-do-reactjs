import React, { useContext } from 'react';
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

  return (
    <Card className={styles.todolist}>
      <ul>
        {todo.map((data) => {
          const date = new Date(data.date);
          const dateYear = date.getFullYear();
          const day = ('0' + date.getDate()).slice(-2);
          const mnum = ('0' + (date.getMonth() + 1)).slice(-2);
          const checkDate = `${dateYear}-${mnum}-${day}`;
          if (filterDate === '') {
            const monthName = new Intl.DateTimeFormat('en-US', {
              month: 'long',
            }).format;
            const month = monthName(date);
            return (
              <li key={data.id}>
                <Card className={styles.dateCard}>
                  <span>{day}</span>

                  <span>{month}</span>
                  <span>{dateYear}</span>
                </Card>
                <div className={styles.descTxt}>
                  {data.desc}
                  {/* {data.desc} {data.status === false ? 'Incomplete' : 'Complete'} */}
                </div>
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
          }
          if (checkDate === filterDate) {
            const monthName = new Intl.DateTimeFormat('en-US', {
              month: 'long',
            }).format;
            const month = monthName(date);
            return (
              <li key={data.id}>
                <Card className={styles.dateCard}>
                  <span>{day}</span>

                  <span>{month}</span>
                  <span>{dateYear}</span>
                </Card>
                <div className={styles.descTxt}>
                  {data.desc}
                  {/* {data.desc} {data.status === false ? 'Incomplete' : 'Complete'} */}
                </div>
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
          }
          return <li> No List Found</li>;
        })}
      </ul>
    </Card>
  );
};

export default TodoList;
