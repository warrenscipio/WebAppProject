// index.js (or index.jsx)

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';  // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* The main App component that contains the app logic */}
  </React.StrictMode>,
  document.getElementById('root')  // The div with id "root" is where the React app will be injected into the DOM
);


