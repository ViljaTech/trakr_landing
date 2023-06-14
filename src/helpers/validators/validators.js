export const emailValidator = (email) => {
  if (!email) {
    return false;
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email)) {
    return false;
  }
  return true;
};

export const nameValidator = (name) => {
  if (!name) {
    return false;
  } else if (!/^[A-Za-z ]+$/.test(name)) {
    return false;
  }
  return true;
};

export const phoneNumberValidator = (phoneNumber) => {
  if (!phoneNumber) {
    return false;
  } else if (!/^[0-9]+$/.test(phoneNumber)) {
    return false;
  }
  return true;
};
