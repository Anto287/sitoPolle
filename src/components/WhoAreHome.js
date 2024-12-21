import React, { useEffect, useRef } from 'react';
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
import '@styles/WhoAreHome.css';

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

const WhoAreHome = () => {  
  const { t } = useTranslation();
  const { data: scrollPosition } = useMyData();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]);
  const listImg = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12];

  return (
    <div className='container-who-are'>
        {breakpoint === 0 && (
            <div className='container-slider-home-mobile'>
                <div
                    className='title-who-are-mobile'
                >
                    <h1>{t('WHO_ARE')}</h1>
                </div>
                
                <div
                    className='container-swiper-home-mobile'
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
                                styleImg={{
                                    objectFit: 'cover',
                                }}
                                loading="lazy"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        )}

        {breakpoint === 1 && (
            <div className='container-slider-home-tablet'>
                <div
                    className='title-who-are-tablet'
                    ref={titleRef}
                >
                    <h1>{t('WHO_ARE')}</h1>
                </div>
                
                <div
                    className='container-swiper-home-tablet'
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
                        <div className='container-who-are-tablet'>
                            <div className='container-text-who-are-tablet'>
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
                                styleImg={{
                                    objectFit: 'cover',
                                }}
                                loading="lazy"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        )}
    </div>
  );
};

export default WhoAreHome;
