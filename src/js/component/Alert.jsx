import React, { useState, useEffect, useContext } from 'react';
import '../../styles/alert.css';
import { Context } from '../store/appContext';

const ERROR = false;
const EXITO = true;

const Alert = ({ message, type }) => {
  const [visible, setVisible] = useState(true);
  const { actions } = useContext(Context);

  const handlerOnClick = () => {
    setVisible(false);
    console.log(actions);
    actions.throwAlert();
  }

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      actions.throwAlert();
    }, 2500);
  }, []);

  return (
    <>
      {
        visible &&
        <div
          className={`alert ${type == ERROR
            ? 'alert--error'
            : 'alert--exito'}`}
          onClick={handlerOnClick}
        >
          <p className='alert__message'>
            {message}
          </p>
        </div>
      }
    </>
  );
}
export default Alert;