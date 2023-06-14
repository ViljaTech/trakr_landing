import React from 'react';
import Styles from './styles.module.css';
const InputField = (props) => {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        className={Styles.inputStyles}
        placeholder={props.placeHolder}
      />
    </div>
  );
};

export default InputField;
