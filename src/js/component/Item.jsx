import React, { useContext } from 'react';
import { Context } from '../store/appContext';

import '../../styles/item.css'

const Item = ({ task, done }) => {
  // hooks
  const { actions: { updateEntireList },
    store: { todos } } = useContext(Context);

  // handlers
  const handlerOnClick = () => {
    const listWithoutThisItem = todos.filter((element) => {
      return (element.label != task && element.done != done)
    });

    updateEntireList(listWithoutThisItem, 'item deleted successful');
  };

  return (
    <div className='item'>
      <p className='item-p'>
        {task}
      </p>
      <span
        className='item-eliminar item-eliminar--oculto '
        onClick={handlerOnClick}
      >
        <i className="bi bi-x-lg"></i>
      </span>
    </div>
  );
};
export default Item;