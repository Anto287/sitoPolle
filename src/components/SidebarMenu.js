import React, { useState, use } from 'react';
import icon from '@images/icon.png';
import '@styles/SidebarMenu.css';

const SidebarMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSidebarToggle = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const menuItems = [
    {
      title: 'Home',
      iconClass: 'fa-solid fa-house',
      submenu: null,
    },
    {
      title: 'La Tana Del Lupo',
      iconClass: 'fa-solid fa-utensils',
      submenu: ['Menu Ristorante', 'Menu Pizzeria', 'Locale'],
    },
    {
      title: 'Campeggio',
      iconClass: 'fa-solid fa-campground',
      submenu: ['Servizi', 'Tariffe'],
    },
    {
      title: 'Area Camper',
      iconClass: 'fa-solid fa-caravan',
      submenu: null,
    },
    {
      title: 'Lago Le Polle',
      iconClass: 'fa-solid fa-fish',
      submenu: ['Bar - Ristorante', 'Pesca'],
    },
  ];

  const settingsItems = [
    {
      title: 'Settings',
      iconClass: 'ph-bold ph-gear',
    },
  ];

  const accountItems = [
    {
      title: 'Help',
      iconClass: 'ph-bold ph-info',
    },
    {
      title: 'Logout',
      iconClass: 'ph-bold ph-sign-out',
    },
  ];

  return (
    <div className={`sidebar ${isSidebarActive ? 'active' : ''}`}>
      <div className="menu-btn" onClick={handleSidebarToggle}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <div className="head">
        <div className="user-img">
          <img src={icon} alt="User Icon" />
        </div>
        <div className="user-details">
          <p className="title">web developer</p>
          <p className="name">John Doe</p>
        </div>
      </div>
      <div className="nav">
        <div className="menu">
          <p className="title">Main</p>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className={activeIndex === index ? 'active' : ''}>
                <a href="#" onClick={() => handleItemClick(index)}>
                  <i className={`icon ${item.iconClass}`}></i>
                  <span className="text">{item.title}</span>
                  {item.submenu && (
                    <i className="arrow ph-bold ph-caret-down"></i>
                  )}
                </a>
                {item.submenu && (
                  <ul
                    className="sub-menu"
                    style={{
                      display: activeIndex === index ? 'block' : 'none',
                    }}
                  >
                    {item.submenu.map((subitem, subIndex) => (
                      <li key={subIndex}>
                        <a href="#">
                          <span className="text">{subitem}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <p className="title">Settings</p>
          <ul>
            {settingsItems.map((item, index) => (
              <li key={index}>
                <a href="#">
                  <i className={`icon ${item.iconClass}`}></i>
                  <span className="text">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="menu">
        <p className="title">Account</p>
        <ul>
          {accountItems.map((item, index) => (
            <li key={index}>
              <a href="#">
                <i className={`icon ${item.iconClass}`}></i>
                <span className="text">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
