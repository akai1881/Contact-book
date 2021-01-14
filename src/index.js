import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContactBookProvider from './context/ContactBookProvider';

ReactDOM.render(
  <ContactBookProvider>
    <App />
  </ContactBookProvider>,
  document.getElementById('root')
);
