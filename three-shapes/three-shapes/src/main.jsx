import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);  // Para React 18+
// Si estás usando React 17 o anterior, usa ReactDOM.render
// ReactDOM.render(<App />, rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
