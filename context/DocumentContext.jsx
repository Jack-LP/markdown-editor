import { createContext, useState, useEffect } from 'react';
import { getFromStorage, setToStorage } from '../utils/localStorage';

const DocumentContext = createContext();

export const DocumentsWrapper = ({ children }) => {
  return (
    <DocumentContext.Provider value={{}}>{children}</DocumentContext.Provider>
  );
};

export default DocumentContext;
