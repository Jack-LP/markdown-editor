import { createContext, useState, useEffect } from 'react';
import { getFromStorage, setToStorage } from '../utils/localStorage';

const DocumentContext = createContext();

export const DocumentsWrapper = ({ children }) => {
  const [docList, setDocList] = useState(getFromStorage('docList', true) || []);

  useEffect(() => {
    setToStorage('docList', JSON.stringify(docList));
  }, [docList]);

  return (
    <DocumentContext.Provider value={{ docList, setDocList }}>
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContext;
