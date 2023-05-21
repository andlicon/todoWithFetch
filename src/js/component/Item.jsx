import React from 'react';

import '../../styles/item.css'

const Item = ({ index, task, handler }) => {

  return (
    <div className='item'>
      <p className='item-p'>
        {task}
      </p>
      <span
        className='item-eliminar item-eliminar--oculto '
        onClick={() => handler(index)}
      >
        <i className="bi bi-x-lg"></i>
      </span>
    </div>
  );
};
export default Item;