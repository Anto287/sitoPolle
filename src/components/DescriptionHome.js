import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { useMyData } from '@components/ScrollData';
import '@styles/DescriptionHome.css';

const DescriptionHome = () => {
  const { t } = useTranslation();
  const { data } = useMyData();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  const controls = useAnimation();

  useEffect(() => {
    const scrollPosition = data;
    const triggerPoint = 100; 

    if (scrollPosition > triggerPoint) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
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

            </div>
        </div>
      }
      {breakpoint === 3 && <div>{t('HELLO_BIG_MONITOR')}</div>}
    </div>
  );
};

export default DescriptionHome;