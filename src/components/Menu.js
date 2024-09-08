import React from 'react';

const Menu = ({ isMenuOpen }) => {
  return (
    <div className="menu">
      {isMenuOpen ? <p>Questo è il menu!</p> : null}
    </div>
  );
};

export default Menu;