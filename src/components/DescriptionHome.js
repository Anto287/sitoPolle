import React, { useEffect, useRef  } from 'react';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { useMyData } from '@components/ScrollData';
import { gsap } from 'gsap';
import Card from '@components/Card';
import '@styles/DescriptionHome.css';

import laghetto from '@images/img_home/laghetto.webp';
import la_tana from '@images/img_home/la_tana.webp';
import area_camper from '@images/img_home/area_camper.webp';
import campeggio from '@images/img_home/campeggio.webp';

const DescriptionHome = () => {
  const { t } = useTranslation();
  const { data } = useMyData();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  const containerRef = useRef(null);
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
    }
  ];

  useEffect(() => {
    const scrollPosition = data;
    const triggerPoint = 200;
  
    // Animazione per il titolo
    if (scrollPosition > 150) {
      gsap.to(containerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        overwrite: 'auto',
      });
    } else {
      gsap.to(containerRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power4.out',
        overwrite: 'auto',
      });
    }
  
    // Animazione per le card
    listStructure.forEach((_, index) => {
      const cardTriggerPoint = triggerPoint + index * 475;
      if (scrollPosition > cardTriggerPoint) {
        gsap.to(cardsRef.current[index], {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          overwrite: 'auto',
        });
      } else {
        gsap.to(cardsRef.current[index], {
          opacity: 0,
          y: 70,
          scale: 0.9,
          duration: 1.2,
          ease: 'power4.out',
          overwrite: 'auto',
        });
      }
    });

    return () => {
      gsap.killTweensOf(containerRef.current);
      cardsRef.current.forEach(card => gsap.killTweensOf(card));
    };
  }, [data]);

  return (
    <div>
      {breakpoint === 0 && 
        <div className='content-where-are-mobile'>
          <div className='container-paragraph-mobile' ref={containerRef} style={{ opacity: 0 }}>
            <h1>{t('OUR_STRUCTURE')}</h1>
          </div>
          <div className='container-cell-img-mobile'>
            {(listStructure || []).map((el, index) => (
              <div 
                key={index}
                ref={(el) => (cardsRef.current[index] = el)} 
                style={{ opacity: 0 }}
              >
                <Card
                  imgCard={el?.img} 
                  altImgCard={el?.title}
                  titleCard={el?.title}
                  descriptionCard={el?.description}
                  styleImgLoader={{minWidth: '40px', width: '100%', maxWidth: '100%', height: 'auto', maxHeight: '225px'}}
                  styleImg={{width: '100%', height: 'auto'}}
                />
              </div>              
            ))}
          </div>
        </div>
      }
      {breakpoint === 1 && <div>{t('HELLO_TABLET')}</div>}
      {breakpoint === 2 && <div>{t('HELLO_PC')}</div>}
      {breakpoint === 3 && <div>{t('HELLO_BIG_MONITOR')}</div>}
    </div>
  );
};

export default DescriptionHome;