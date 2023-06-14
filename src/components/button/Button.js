import Styles from './styles.module.css';
import React from 'react';
const Button = (props) => {
  return (
    <button
      className={[Styles.buttonStyles, props.buttonStyles].join(' ')}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.btnName}
    </button>
  );
};

export default Button;
