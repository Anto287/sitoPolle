import React from 'react';
import { useTranslation } from 'react-i18next';
import ImgLoader from '@components/ImgLoader';
import ButtonPrimary from '@components/ButtonPrimary';
import '@styles/CardLarge.css';

const CardLarge = ({
  imgCard,
  altImgCard,
  titleCard,
  descriptionCard,
  containerClassImgLoader,
  visible,
  fullLarge,
  textForBigMonitor
}) => {
  const { t } = useTranslation();

  return (
    <div className={'card-large' + (visible ? '' : ' hidden') + (fullLarge ? ' large' : '')}>
      <div className='container-img'>
        <ImgLoader
          src={imgCard}
          containerClass={containerClassImgLoader}
          styleImgLoader={{
            width: '100%',
            height: '100%'
          }}
          style={{
            width: '100%',
            height: '100%'
          }}
          alt={t(altImgCard)}
          loading="lazy"
        />
      </div>
      
      <div className="card-content">
        <div className='card-container-text'>
          <h2 className={'card-title' + (textForBigMonitor ? ' big-text-title' : '')}>{t(titleCard)}</h2>
          <p className={'card-description' + (textForBigMonitor ? ' big-text-description' : '')}>{t(descriptionCard)}</p>
          <div className="card-container-action">
            <ButtonPrimary 
              icon="fa-share-from-square"
              label="LEARN_MORE"
              width="65%"
              classContainerText={textForBigMonitor ? 'btn-big-monitor' : ''}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLarge;
