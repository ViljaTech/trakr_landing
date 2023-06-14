import React from 'react';
import Styles from './styles.module.css';
import {
  facebookLogo,
  linkedinLogo,
  twitterLogo,
  instagramLogo,
} from 'resources/images/Images';

const Footer = () => {
  return (
    <div className={Styles.footerOuterContainerStyles}>
      <div className={Styles.footerInerContainerStyles}>
        <div className={Styles.facebookLogoContainerStyles}>
          <img
            src={facebookLogo}
            alt="facebooklogo"
            className={Styles.footerLogoStyles}
          />
        </div>
        <div className={Styles.linkedinLogoContainerStyles}>
          <img
            src={linkedinLogo}
            alt="linkedinlogo"
            className={Styles.footerLogoStyles}
          />
        </div>
        <div className={Styles.twitterLogoContainerStyles}>
          <img
            src={twitterLogo}
            alt="twitterlogo"
            className={Styles.footerLogoStyles}
          />
        </div>
        <div className={Styles.instagramLogoContainerStyles}>
          <img
            src={instagramLogo}
            alt="instagramlogo"
            className={Styles.footerLogoStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
