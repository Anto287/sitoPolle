import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { useMyData } from '@components/ScrollData';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
          <div
            className="container-paragraph-tablet"
            ref={containerParagraphRef}
            style={{ opacity: 0 }}
          >
            <h1>{t('OUR_STRUCTURE')}</h1>
          </div>
          <div
            className="container-carusel-tablet"
            ref={containerCarouselRef}
            style={{ opacity: 0 }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              loop
              grabCursor
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
            >
              {listStructure.map((el, index) => (
                <SwiperSlide key={index} className='container-slide-tablet'>
                  <CardLarge
                    fullLarge
                    visible
                    imgCard={el.img}
                    altImgCard={el.title}
                    titleCard={el.title}
                    descriptionCard={el.description}
                    styleImg={{ width: '100%', height: 'auto' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
            <div className="custom-arrow custom-arrow-left">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.custom-arrow-right',
                prevEl: '.custom-arrow-left',
              }}
              loop
              grabCursor
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {listStructure.map((el, index) => (
                <SwiperSlide key={index} className='container-slide-pc'>
                  <CardLarge
                    visible
                    imgCard={el.img}
                    altImgCard={el.title}
                    titleCard={el.title}
                    descriptionCard={el.description}
                    styleImg={{ width: '100%', height: 'auto' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-arrow custom-arrow-right">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionHome;