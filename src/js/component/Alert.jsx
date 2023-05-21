import React, { useState, useEffect, useContext } from 'react';
import '../../styles/alert.css';
import { Context } from '../store/appContext';

const ERROR = false;
const EXITO = true;

const Alert = ({ mensaje, tipo }) => {
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
          className={`alert ${tipo == ERROR
            ? 'alert--error'
            : 'alert--exito'}`}
          onClick={handlerOnClick}
        >
          <p className='alert__mensaje'>
            {mensaje}
          </p>
        </div>
      }
    </>
  );
}
export default Alert;