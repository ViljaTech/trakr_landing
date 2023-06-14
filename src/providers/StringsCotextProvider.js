import React, { createContext } from 'react';
import { englishStrings } from 'resources/strings/eng';
const StringsContext = createContext();

const StringsCotextProvider = ({ children }) => {
  const value = {
    strings: englishStrings,
  };
  return (
    <StringsContext.Provider  value={value}>{children}</StringsContext.Provider>
  );
};

export { StringsCotextProvider, StringsContext };
