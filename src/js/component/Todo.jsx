import React, { useState } from 'react';

import '../../styles/todo.css';
import Item from './Item.jsx';

const Todo = () => {
  // hooks
  const [adder, setAdder] = useState('');
  const [items, setItems] = useState([]);

  // Manejadores
  const handlerChange = (event) => {
    setAdder(event.target.value);
  }
  const handlerOnKey = ({ code }) => {
    if (code == 'Enter') anadirItem();
  }
  const handlerDelete = index => {
    const arreglo = items.slice();
    const newArray = arreglo.filter((element, i) => {
      return index != i;
    });

    setItems(newArray);
  }

  const generarError = mensaje => {
    setError(mensaje);

    if (error == null) {
      setTimeout(
        () => { setError(null); }
        , 3000);
    }
  };

  const anadirItem = () => {
    if (adder === '') {
      generarError('No se puede cargar un item vacío');
      return;
    }
    if (items.some(element => element == adder)) {
      generarError('No se pueden duplicar las tareas');
      return;
    }

    setItems([...items, adder]);
    setAdder('');
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
          items.map((element, index) => {
            return (
              <Item
                key={index}
                task={element}
                items={items}
                setItems={setItems}
                handler={handlerDelete}
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
            items.length == 0
              ? 'No task, add a task'
              : `${items.length} item left`
          }
        </p>
      </div>
    </div>
  );
};
export default Todo;