import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { useMyData } from '@components/ScrollData';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImgLoader from '@components/ImgLoader';
import ParalaxHome from '@components/ParalaxHome';
import DescriptionHome from '@components/DescriptionHome';
import '@styles/HomeStyle.css';

import img_1 from '@images/img_home_desc/img_1.webp';
import img_2 from '@images/img_home_desc/img_2.webp';
import img_3 from '@images/img_home_desc/img_3.webp';
import img_4 from '@images/img_home_desc/img_4.webp';
import img_5 from '@images/img_home_desc/img_5.webp';
import img_6 from '@images/img_home_desc/img_6.webp';
import img_7 from '@images/img_home_desc/img_7.webp';
import img_8 from '@images/img_home_desc/img_8.webp';
import img_9 from '@images/img_home_desc/img_9.webp';
import img_10 from '@images/img_home_desc/img_10.webp';
import img_11 from '@images/img_home_desc/img_11.webp';
import img_12 from '@images/img_home_desc/img_12.webp';

gsap.registerPlugin(useGSAP);

const HomePage = ({ pageArleadyStart }) => {  
  const { t } = useTranslation();
  const [isParalaxLoaded, setIsParalaxLoaded] = useState(false);
  const { data: scrollPosition } = useMyData();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]);
  const listImg = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12];

  const titleRef = useRef(null);
  const swiperRef = useRef(null);

  const handleParalaxLoad = () => {
    setIsParalaxLoaded(true);
  };

  const animateOnScroll = () => {
    const viewportHeight = window.innerHeight;
  
    if (titleRef.current) {
      const titleTop = titleRef.current.getBoundingClientRect().top;
      gsap.to(titleRef.current, {
        opacity: titleTop < viewportHeight * 0.9 ? 1 : 0,
        y: titleTop < viewportHeight * 0.9 ? 0 : 100,
        duration: 1.2,
        ease: 'power4.out',
      });
    }
  
    if (swiperRef.current) {
      const swiperTop = swiperRef.current.getBoundingClientRect().top;
      gsap.to(swiperRef.current, {
        opacity: swiperTop < viewportHeight * 0.8 ? 1 : 0,
        y: swiperTop < viewportHeight * 0.8 ? 0 : 100,
        duration: 1.2,
        ease: 'power4.out',
      });
    }
  };

  useEffect(() => {
    animateOnScroll();

    return () => {
      gsap.killTweensOf([swiperRef.current, titleRef.current]);
    };
  }, [scrollPosition]);

  useEffect(() => {
    if (isParalaxLoaded) {
      pageArleadyStart();
    }
  }, [isParalaxLoaded]);

  return (
    <>
      <div className="container-page">
        <div className='container-paralax-effect' style={{visibility: isParalaxLoaded ? 'visible' : 'hidden'}}>
          <ParalaxHome onLoad={handleParalaxLoad}/>
        </div>
        <div className='container-who-are'>
          {breakpoint === 0 && (
            <div className='container-slider-home-mobile'>
              <div
                className='title-who-are-mobile'
                ref={titleRef}
              >
                <h1>{t('WHO_ARE')}</h1>
              </div>
              
              <div
                className='container-swiper-home-mobile'
                ref={swiperRef}
              >
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  spaceBetween={0}
                  slidesPerView={1}
                  effect={'fade'}
                  loop={true}
                  allowTouchMove={false}
                  grabCursor={false}
                  speed={2000}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                >
                  <div className='container-who-are-mobile'>
                    <div className='container-text-who-are-mobile'>
                      <b>{t('WHO_ARE_TITLE')}</b>
                      {t('WHO_ARE_LONG_DESC')}
                    </div>
                  </div>
                  {listImg.map((el, index) => (
                    <SwiperSlide key={index}>
                      <ImgLoader
                        src={el}
                        styleImgLoader={{
                          width: '100%',
                          height: '50vh',
                        }}
                        style={{
                          width: '100%',
                          height: '50vh',
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}
        </div>
        <DescriptionHome />
      </div>
    </>
  );
};

export default HomePage;
