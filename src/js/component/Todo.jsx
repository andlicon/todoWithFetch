import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';

import '../../styles/todo.css';
import Item from './Item.jsx';

const Todo = () => {
  // hooks
  const { store: { todos } } = useContext(Context);
  const [adder, setAdder] = useState('');

  // Manejadores
  const handlerChange = (event) => {
    setAdder(event.target.value);
  }
  const handlerOnKey = ({ code }) => {
    if (code == 'Enter') anadirItem();
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
          id='adder'
          name='adder'
          onChange={(handlerChange)}
          value={adder}
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