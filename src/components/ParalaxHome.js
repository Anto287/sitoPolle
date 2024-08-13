import React from 'react';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { MouseParallax } from 'react-just-parallax';

import img_home from '@images/img_paralax_home/img_home.jpeg';

const ParalaxHome = () => {
  const { t } = useTranslation();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  
  return (
    <div style={{position: 'relative', height: '100vh', width: '100vw', objectFit: 'contain'}}>
      {breakpoint === 0 && <div>{t('HELLO_MOBILE')}</div>}
      {breakpoint === 1 && <div>{t('HELLO_TABLET')}</div>}
      {breakpoint === 2 && 
        <div>
          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            isAbsolutelyPositioned
            lerpEase={0.01}
            strength={0.01}
          >
            <img src={img_home} style={{maskImage: 'linear-gradient(white 70%, transparent)'}} alt=''/>
          </MouseParallax>
        </div>
      }
      {breakpoint === 3 && <div>{t('HELLO_BIG_MONITOR')}</div>}
    </div>
  );
};

export default ParalaxHome;