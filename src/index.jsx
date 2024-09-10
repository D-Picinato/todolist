import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      <p>Site por <a href='https://dpicinato.com' target='_blank'>Dimas Picinato</a></p>
      <p>Layout por <a href='https://github.com/gacalistro' target='_blank'>Gabriel Calistro</a></p>
      <p>2024 - Nenhum direito reservado :)</p>
    </footer>
  </React.StrictMode>
);