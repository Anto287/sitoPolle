import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { useMyData } from '@components/ScrollData';
import { gsap } from 'gsap';
import Card from '@components/Card';
import CardLarge from '@components/CardLarge';
import '@styles/DescriptionHome.css';

import laghetto from '@images/img_home/laghetto.webp';
import la_tana from '@images/img_home/la_tana.webp';
import area_camper from '@images/img_home/area_camper.webp';
import campeggio from '@images/img_home/campeggio.webp';

const DescriptionHome = () => {
  const { t } = useTranslation();
  const { data: scrollPosition } = useMyData();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]);

  const containerParagraphRef = useRef(null);
  const containerCarouselRef = useRef(null);
  const cardsRef = useRef([]);
  const autoSlideTimer = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  const listStructure = [
    {
      img: la_tana,
      title: t('LA_TANA_TITLE'),
      description: t('LA_TANA_DESCRIPTION'),
    },
    {
      img: laghetto,
      title: t('LAGHETTO_TITLE'),
      description: t('LAGHETTO_DESCRIPTION'),
    },
    {
      img: area_camper,
      title: t('AREA_CAMPER_TITLE'),
      description: t('AREA_CAMPER_DESCRIPTION'),
    },
    {
      img: campeggio,
      title: t('CAMPING_TITLE'),
      description: t('CAMPING_DESCRIPTION'),
    },
  ];

  const animateOnScroll = () => {
    const triggerPointParagraph = 150;
    const triggerPointCarousel = 350;
  
    if (containerParagraphRef.current) {
      gsap.to(containerParagraphRef.current, {
        opacity: scrollPosition > triggerPointParagraph ? 1 : 0,
        y: scrollPosition > triggerPointParagraph ? 0 : 100,
        duration: 1.2,
        ease: 'power4.out',
      });
    }
  
    if (containerCarouselRef.current) {
      gsap.to(containerCarouselRef.current, {
        opacity: scrollPosition > triggerPointCarousel ? 1 : 0,
        y: scrollPosition > triggerPointCarousel ? 0 : 100,
        duration: 1.2,
        ease: 'power4.out',
      });
    }
  
    listStructure.forEach((_, index) => {
      const cardTriggerPoint = triggerPointCarousel + index * 475;
      if (cardsRef.current[index]) {
        gsap.to(cardsRef.current[index], {
          opacity: scrollPosition > cardTriggerPoint ? 1 : 0,
          y: scrollPosition > cardTriggerPoint ? 0 : 70,
          scale: scrollPosition > cardTriggerPoint ? 1 : 0.9,
          duration: 1.2,
          ease: 'power4.out',
        });
      }
    });
  };

  useEffect(() => {
    animateOnScroll();

    return () => {
      gsap.killTweensOf([containerParagraphRef.current, containerCarouselRef.current]);
      cardsRef.current.forEach((card) => gsap.killTweensOf(card));
    };
  }, [scrollPosition]);

  const startAutoSlide = () => {
    clearInterval(autoSlideTimer.current);
    autoSlideTimer.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % listStructure.length);
    }, 10000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideTimer.current);
  }, [currentIndex]);

  const handleManualSlide = (direction) => {
    clearInterval(autoSlideTimer.current);
    setCurrentIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? listStructure.length - 1 : prevIndex - 1;
      } else if (direction === 'next') {
        return (prevIndex + 1) % listStructure.length;
      }
    });
    startAutoSlide();
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    const dragDistance = e.clientX - dragStartX.current;
    if (dragDistance > 50) handleManualSlide('prev');
    else if (dragDistance < -50) handleManualSlide('next');
  };

  return (
    <div>
      {breakpoint === 0 && (
        <div className="content-where-are-mobile">
          <div
            className="container-paragraph-mobile"
            ref={containerParagraphRef}
            style={{ opacity: 0 }}
          >
            <h1>{t('OUR_STRUCTURE')}</h1>
          </div>
          <div className="container-cell-img-mobile">
            {listStructure.map((el, index) => (
              <div
                key={index}
                ref={(elRef) => cardsRef.current[index] = elRef}
                style={{ opacity: 0 }}
              >
                <Card
                  visible
                  imgCard={el.img}
                  altImgCard={el.title}
                  titleCard={el.title}
                  descriptionCard={el.description}
                  styleImgLoader={{
                    minWidth: '40px',
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '225px',
                  }}
                  styleImg={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {breakpoint === 1 && (
        <div className="content-where-are-tablet">

        </div>
      )}
      {breakpoint === 2 && (
        <div className="content-where-are-pc">
          <div
            className="container-paragraph-pc"
            ref={containerParagraphRef}
            style={{ opacity: 0 }}
          >
            <h1>{t('OUR_STRUCTURE')}</h1>
          </div>
          <div
            className="container-carusel-pc"
            ref={containerCarouselRef}
            style={{ opacity: 0 }}
          >
            <div className="container-arrow-left-pc">
              <div className="arrow" onClick={() => handleManualSlide('prev')}>
                <i className="fa-solid fa-chevron-left"></i>
              </div>
            </div>
            <div className="container-cell-img-pc">
              {listStructure.map((el, index) => (
                <div
                  key={index}
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  <CardLarge
                    visible={index === currentIndex}
                    imgCard={el.img}
                    altImgCard={el.title}
                    titleCard={el.title}
                    descriptionCard={el.description}
                    styleImg={{ width: '100%', height: 'auto' }}
                  />
                </div>
              ))}
              <div className="carousel-navigation">
                {listStructure.map((_, index) => (
                  <div
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
            <div className="container-arrow-right-pc">
              <div className="arrow" onClick={() => handleManualSlide('next')}>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionHome;