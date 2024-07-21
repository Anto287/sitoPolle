import React from 'react';
import "@styles/Button.css";

const Button = ({ text, icon, className, onClick, style }) => {
  return (
    <button className={className} onClick={onClick} style={style}>
        {icon && 
            <div className='icon-container'>
                <i class={icon}></i>
            </div>
        }
        {text && 
            <div className='text-container'>
                <span>{text}</span>
            </div>
        }
    </button>
  );
};

export default Button;