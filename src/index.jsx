import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Renderizamos la aplicación principal (App) dentro del elemento con id 'root' en el DOM, utilizando React.StrictMode para ayudar a identificar problemas potenciales en la aplicación durante el desarrollo.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);