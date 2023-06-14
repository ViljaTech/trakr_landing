import React from 'react';
import Styles from './styles.module.css';

const FeaturesCard = (props) => {
  return (
    <div className={Styles.featuresCardOuterStyles}>
      <div className={Styles.featuresCardInnerStyles}>
        <div className={Styles.featuresCardImageBlockStyles}>
          <img
            src={props.icon}
            alt="icon"
            className={Styles.featuresCardImageStyles}
          />
        </div>
        <div className={Styles.featuresCardDescBlockStyles}>
          <p className={Styles.featuresCardDescStyles}>{props.fName}</p>
          <p className={Styles.featuresCardDescStyles}> {props.lName}</p>
          <p className={Styles.mobileFeaturesCardDescStyles}>
            {props.fName + props.lName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
