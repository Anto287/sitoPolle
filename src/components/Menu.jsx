import React from 'react';
import '@styles/Menu.css';

const Menu = ({ isMenuOpen, closeMenu }) => {
  return (
    <div>
      {isMenuOpen && 
        <div className='menu'>
          <p>Questo è il menu!</p>
          <i class="fa-solid fa-xmark" onClick={() => closeMenu()}></i>
        </div>
      }
    </div>
  );
};

export default Menu;