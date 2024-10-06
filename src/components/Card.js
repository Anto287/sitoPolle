import React from 'react';
import { useTranslation } from 'react-i18next';
import ImgLoader from '@components/ImgLoader';
import '@styles/Card.css';

const Card = ({imgCard, altImgCard, titleCard, descriptionCard, styleImgLoader, containerClassImgLoader, styleImg}) => {
    const { t } = useTranslation();

    return (
        <div>
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
                <div className="card-action">
                    <span>{t('LEARN_MORE')}</span>
                    <i className="fa-solid fa-share-from-square fa-bounce"></i>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Card;