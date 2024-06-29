import React, { useState } from 'react';
import icon from '@images/icon.png';

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);
  
  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      
    </div>
  );
};

export default SidebarMenu;