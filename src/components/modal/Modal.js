import React, { useEffect, useRef, useState } from 'react';
import Styles from './styles.module.css';
import { closeCircleLight } from 'resources/images/Images';
import emailjs from '@emailjs/browser';
import {
  emailValidator,
  nameValidator,
  // phoneNumberValidator,
} from 'helpers/validators/validators';

const Modal = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // phoneNumber: '',
    // companyName: '',
    message: '',
  });
  const [fromError, setFromError] = useState();
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_4rzxitg',
        'template_qnzyogg',
        form.current,
        'BCL0VqeQ06EXqocoa'
      )
      .then(
        (res) => {
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            companyName: '',
            message: '',
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const sendFromData = (e) => {
    e.preventDefault();
    if (
      nameValidator(formData.name) &&
      emailValidator(formData.email) &&
      formData.message.length > 0
      // phoneNumberValidator(formData.phoneNumber) &&
      // (formData.companyName.length > 0)
    ) {
      sendMail(e);
    } else {
      setFromError({
        message: 'Please Enter All Fields With Valid Data',
      });
    }
  };
  useEffect(() => {
    document.body.style.cssText = 'overflow:hidden';
    return () => {
      document.body.style.cssText = 'overflow:auto';
    };
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFromError(null);
  };

  return (
    <div className={Styles.modalOuterContainerStyles}>
      <div className={Styles.modalInnerContainerStyles}>
        <div className={Styles.collapseIconBlockStyles}>
          <img
            src={closeCircleLight}
            alt="icon"
            className={Styles.collapseIconStyles}
            onClick={() => {
              props.closePopUp(false);
            }}
          />
        </div>
        <div className={Styles.modalHeadingBlockStyle}>
          <h2 className={Styles.modalHeadingStyles}>
            Join the <span>waiting list</span> and we’ll inform you when our
            product is market-ready!
          </h2>
          <p className={Styles.modalDescStyles}>
            If you are interested to know more about trakr, you can{' '}
            <span>book a demo meeting</span>
          </p>
        </div>
        <form
          onSubmit={(e) => sendFromData(e)}
          ref={form}
          className={Styles.modalFormStyles}
        >
          <div className={Styles.modalInputsBlockStyles}>
            {fromError && (
              <div className={Styles.errorBlockStyles}>
                <p className={Styles.errorDescStyles}>{fromError.message}</p>
              </div>
            )}
            <div>
              <input
                name="name"
                type="text"
                placeholder="Your Full Name*"
                className={Styles.inputStyles}
                value={formData.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Your Email ID*"
                className={Styles.inputStyles}
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* <div>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone number*"
              className={Styles.inputStyles}
              value={formData.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
          </div> 
          <div>
            <input
              name="companyName"
              type="text"
              placeholder="Enter company name*"
              className={Styles.inputStyles}
              value={formData.companyName}
              onChange={(e) => handleChange(e)}
            />
          </div> */}
            <div>
              <textarea
                rows={5}
                placeholder="Your message here (Optional)"
                className={Styles.inputStyles}
                style={{ resize: 'none' }}
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className={Styles.submitButtonBlockStyles}>
            <button type="submit" className={Styles.submitButtonStyles}>
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
