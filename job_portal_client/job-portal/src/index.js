import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import RouterIndex from './frameworks/RouterIndex';

ReactDOM.render(
  <React.StrictMode>
    <RouterIndex/>
  </React.StrictMode>,
  document.getElementById('root')
);
