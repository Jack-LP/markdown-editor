import React from 'react';
import ReactDOM from 'react-dom/client';
import { DocumentsWrapper } from '../context/DocumentContext';
import App from './App';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DocumentsWrapper>
    <App />
  </DocumentsWrapper>
);
