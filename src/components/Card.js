import React from 'react';
import { useTranslation } from 'react-i18next';
import ImgLoader from '@components/ImgLoader';
import ButtonPrimary from '@components/ButtonPrimary';
import '@styles/Card.css';

const Card = ({
  imgCard,
  altImgCard,
  titleCard,
  descriptionCard,
  styleImgLoader,
  containerClassImgLoader,
  styleImg,
}) => {
  const { t } = useTranslation();

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
        <div className="card-container-action">
          <ButtonPrimary 
            icon="fa-share-from-square"
            label="LEARN_MORE"
            width="60%"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
