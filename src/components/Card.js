import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImgLoader from '@components/ImgLoader';
import '@styles/Card.css';

const Card = ({ imgCard, altImgCard, titleCard, descriptionCard, styleImgLoader, containerClassImgLoader, styleImg }) => {
    const { t } = useTranslation();
    const [ripples, setRipples] = useState([]);
    const [btnInHover, setBtnInHover] = useState({});

    const handleClick = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples((prevRipples) => [...prevRipples, newRipple]);

        setTimeout(() => {
            setRipples((prevRipples) => prevRipples.filter(r => r.id !== newRipple.id));
        }, 1000);
    };

    const mouseEnter = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - 10;
        const y = e.clientY - rect.top - 10;
    
        setBtnInHover({ x, y, id: Date.now() });
    }
    
    const mouseLeave = () => {
        setBtnInHover(null);
    }

    return (
        <div className="card">
            <ImgLoader 
                src={imgCard} 
                style={styleImgLoader}
                containerClass={containerClassImgLoader}
                styleImg={styleImg}
                alt={t(altImgCard)}
            />  
            <div className="card-content">
                <h2 className="card-title">{t(titleCard)}</h2>
                <p className="card-description">{t(descriptionCard)}</p>
                <div className='card-container-action'>
                    <div 
                        className={`card-action ${btnInHover?.id ? 'card-hover' : ''}`}
                        onClick={handleClick}
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                    >
                        {ripples.map(ripple => (
                            <span 
                                key={ripple.id} 
                                className="ripple" 
                                style={{ left: ripple.x, top: ripple.y }}
                            />
                        ))}
                        {btnInHover?.id &&  
                            <span 
                                key={btnInHover.id} 
                                className="btn-hover" 
                                style={{ left: btnInHover.x, top: btnInHover.y }}
                            />
                        }
                        <span>{t('LEARN_MORE')}</span>
                        <i className="fa-solid fa-share-from-square"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
