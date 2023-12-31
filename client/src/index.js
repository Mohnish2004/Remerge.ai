import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './css/style.css';
import App from './App';

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);