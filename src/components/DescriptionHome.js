import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { useMyData } from '@components/ScrollData';
import ImgLoader from '@components/ImgLoader';
import '@styles/DescriptionHome.css';

import laghetto from '@images/img_home/laghetto.webp';
import la_tana from '@images/img_home/la_tana.webp';
import area_camper from '@images/img_home/area_camper.webp';

const DescriptionHome = () => {
  const { t } = useTranslation();
  const { data } = useMyData();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  const controls = useAnimation();
  const controlsCell = useAnimation();
  const listStructure = [
    {
        img: laghetto
    },
    {
        img: la_tana
    },
    {
        img: area_camper
    }
  ]

  useEffect(() => {
    const scrollPosition = data;
    const triggerPoint = 200; 

    if (scrollPosition > triggerPoint) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 }); 
    }

    if(scrollPosition > (triggerPoint + 100)){
        controlsCell.start({ opacity: 1, y: 0 });
    }else{
        controlsCell.start({ opacity: 0, y: 70 });
    }
  }, [data]);

  return (
    <div>
      {breakpoint === 0 && <div>{t('HELLO_MOBILE')}</div>}
      {breakpoint === 1 && <div>{t('HELLO_TABLET')}</div>}
      {breakpoint === 2 && 
        <div className='content-where-are'>
            <div className='container-paragraph'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.5 }} 
                >
                    <h1>{t('OUR_STRUCTURE')}</h1>
                </motion.div>
            </div>
            <div className='container-cell-img'>
                {(listStructure || []).map((el) => 
                    <motion.div
                        className='cell'
                        initial={{ opacity: 0, y: 70 }}
                        animate={controlsCell}
                        transition={{ duration: 0.5 }} 
                    >
                        <ImgLoader 
                            src={el.img} 
                            style={{minWidth: '40px', width: '100%', maxWidth: '100%', height: 'auto'}} 
                            styleImg={{width: '100%', height: 'auto'}}
                            alt={t('THE_POLLE')}
                        />
                    </motion.div>
                )}
            </div>
        </div>
      }
      {breakpoint === 3 && <div>{t('HELLO_BIG_MONITOR')}</div>}
    </div>
  );
};

export default DescriptionHome;