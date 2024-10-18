import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@styles/ButtonPrimary.css';

const ButtonPrimary = () => {
  const { t } = useTranslation();
  const [ripples, setRipples] = useState([]);
  const [hoverCircle, setHoverCircle] = useState(null);
  const [exitCircle, setExitCircle] = useState(null);

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

  return (
    <button
      className={`btn-action ${hoverCircle ? 'hover-active' : ''}`}
      onClick={handleClick}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      {hoverCircle && (
        <span
          className="hover-circle"
          style={{ left: hoverCircle.x, top: hoverCircle.y }}
        />
      )}

      {exitCircle && (
        <span
          className="exit-circle"
          style={{ left: exitCircle.x, top: exitCircle.y }}
        />
      )}

      <div className="container-btn">
        <span>{t('LEARN_MORE')}</span>
        <i className="fa-solid fa-share-from-square"></i>
      </div>
    </button>
  );
};

export default ButtonPrimary;
