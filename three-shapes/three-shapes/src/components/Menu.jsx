// src/components/Menu.jsx
import React from 'react';
import '../Menu.css'  // Archivo de estilos del menú

const Menu = ({ onStart }) => {
  return (
    <div className="menu-container">
      <div className="menu-content">
        <h1>GAME MENU</h1>
        <button onClick={onStart} className="start-button">PLAY</button>
      </div>
    </div>
  );
};

export default Menu;
