import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@styles/ButtonPrimary.css';

const ButtonPrimary = ({ label, title, effectButton = true, icon, btnClass, classContainerText, width = 'auto' }) => {
  const { t } = useTranslation();
  const [ripples, setRipples] = useState([]);
  const [hoverCircle, setHoverCircle] = useState(null);
  const [exitCircle, setExitCircle] = useState(null);
  const [bgActive, setBgActive] = useState(false);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((r) => r.id !== newRipple.id)
      );
    }, 600);
  };

  const mouseEnter = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHoverCircle({ x, y });
    setExitCircle(null);
  };

  const mouseLeave = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setExitCircle({ x, y });
    setHoverCircle(null);
  };

  const handleHoverAnimationEnd = () => {
    setBgActive(true);
  };

  const handleExitAnimationStart = () => {
    setBgActive(false); 
  };

  return (
    <button
      className={`btn-action ${hoverCircle && effectButton ? 'hover-active' : ''} ${bgActive ? 'bg-active' : ''} ${btnClass}`}
      style={{width: width}}
      onClick={handleClick}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      title={t(title || label || '')}
      onAnimationEnd={hoverCircle ? handleHoverAnimationEnd : undefined}
      onAnimationStart={exitCircle ? handleExitAnimationStart : undefined}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      {hoverCircle && effectButton && (
        <span
          className="hover-circle"
          style={{ left: hoverCircle.x, top: hoverCircle.y }}
        />
      )}

      {exitCircle && effectButton && (
        <span
          className="exit-circle"
          style={{ left: exitCircle.x, top: exitCircle.y }}
        />
      )}

      <div className={`container-btn ${classContainerText}`}>
        <span>{t(label || '')}</span>
        <i className={`fa-solid ${icon || ''}`}></i>
      </div>
    </button>
  );
};

export default ButtonPrimary;
