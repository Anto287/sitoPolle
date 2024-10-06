import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { useMyData } from '@components/ScrollData';
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
  const controls = useAnimation();
  const controlsCell = useAnimation();
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

    if (scrollPosition > triggerPoint) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 }); 
    }

    if(scrollPosition > (triggerPoint + 70)){
      controlsCell.start({ opacity: 1, y: 0 });
    }else{
      controlsCell.start({ opacity: 0, y: 70 });
    }
  }, [data]);

  return (
    <div>
      {breakpoint === 0 && 
        <div className='content-where-are-mobile'>
          <div className='container-paragraph-mobile'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.5 }} 
            >
              <h1>{t('OUR_STRUCTURE')}</h1>
            </motion.div>
          </div>
          <div className='container-cell-img-mobile'>
            {(listStructure || []).map((el, index) => (
              <Card 
                imgCard={el?.img} 
                altImgCard={el?.title}
                titleCard={el?.title}
                descriptionCard={el?.description}
                styleImgLoader={{minWidth: '40px', width: '100%', maxWidth: '100%', height: 'auto', maxHeight: '225px'}}
                containerClassImgLoader="zoom-effect" 
                styleImg={{width: '100%', height: 'auto'}}
              ></Card>
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