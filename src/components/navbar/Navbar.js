import React, { useEffect, useRef, useState } from 'react';
import Styles from './styles.module.css';
import { logo, menuIcon } from 'resources/images/Images';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    }

    // Add event listener to document object
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);
  const scrollToSection = (id) => {
    // const ele = document.getElementById(id);
    // window.scrollTo(ele.offsetLeft, ele.offsetTop - 100);
    setToggle(false);
    document.getElementById(id).scrollIntoView();
  };

  return (
    <div className={Styles.navbarOuterContainerStyles}>
      <div className={Styles.navbarInnerContainerStyles}>
        <div
          className={Styles.logoContainerStyles}
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} className={Styles.logoImageStyles} alt="logo" />
        </div>
        <div
          className={Styles.menuIconContainerStyles}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <img
            src={menuIcon}
            className={Styles.menuIconImageStyles}
            alt="menuIcon"
          />
        </div>
      </div>
      {toggle && (
        <div className={Styles.togggleMenuContainerStyles} ref={menuRef}>
          <div>
            <p
              className={Styles.menuLinkStyles}
              onClick={() => scrollToSection('problemsSection')}
            >
              Why choose trakr
            </p>
            <p
              className={Styles.menuLinkStyles}
              onClick={() => scrollToSection('stats')}
            >
              Stats
            </p>
            <p
              className={Styles.menuLinkStyles}
              onClick={() => scrollToSection('featuresSection')}
            >
              Features
            </p>
            <p
              className={Styles.menuLinkStyles}
              onClick={() => {
                scrollToSection('faqSection');
              }}
            >
              FAQs
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
