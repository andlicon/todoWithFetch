import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';

import '../../styles/todo.css';
import Item from './Item.jsx';

const Todo = () => {
  // hooks
  const { store: { todos },
    actions: { updateEntireList } } = useContext(Context);
  const [newTask, setNewTask] = useState({ label: '', done: false });

  // Manejadores
  const handlerChange = ({ target: { value } }) => {
    setNewTask({ label: value, done: false });
  }
  const handlerOnKey = ({ code }) => {
    if (code == 'Enter') updateEntireList([...todos, newTask]);
  }

  return (
    <div className='todo'>
      {/* anadir informacion al todo */}
      <div
        className='todo__adder content-center'
        onKeyPress={handlerOnKey}
      >
        <input
          type='text'
          className='todo__item todo__input'
          id='newTask'
          name='newTask'
          onChange={(handlerChange)}
          value={newTask.label}
        />
      </div>
      {/* cuerpo del todo */}
      <div className='todo__body content-center'>
        {
          todos.map((element, index) => {
            return (
              <Item
                key={index}
                task={element.label}
                status={element.done}
                index={index}
              />
            )
          })
        }
      </div>
      {/* estatus del todo */}
      <div className='todo__status'>
        <p className='status'>
          {
            todos.length == 0
              ? 'No task, add a task'
              : `${todos.length} item left`
          }
        </p>
      </div>
    </div>
  );
};
export default Todo;