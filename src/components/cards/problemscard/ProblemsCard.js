import React from 'react';
import Styles from './styles.module.css';

const ProblemsCard = (props) => {
  return (
    <div className={Styles.problemsCardStyles}>
      <div className={Styles.problemsCardHeadStyles}>
        <div>
          <img
            src={props.icon}
            alt="icon"
            className={Styles.problemIconStyles}
          />
        </div>
        <h3 className={Styles.problemsHeadingStyles}>{props.heading}</h3>
      </div>
      <p className={Styles.problemDescStyles}>{props.desc}</p>
    </div>
  );
};

export default ProblemsCard;
