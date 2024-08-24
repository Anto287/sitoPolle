import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import { MouseParallax } from 'react-just-parallax';

import '@styles/ParalaxHome.css';

import cielo from '@images/img_paralax_home/cielo.webp';
import nuvola from '@images/img_paralax_home/nuvola.webp';
import fog_2 from '@images/img_paralax_home/fog_2.webp';
import secondo_piano from '@images/img_paralax_home/secondo_piano.webp';
import fog_1 from '@images/img_paralax_home/fog_1.webp';
import laghetto from '@images/img_paralax_home/laghetto.webp';
import sun_rays from '@images/img_paralax_home/sun_rays.webp';
import front from '@images/img_paralax_home/front.webp';

const ParalaxHome = () => {
  const { t } = useTranslation();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  const [loadedImages, setLoadedImages] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === 8) {
      setAllImagesLoaded(true);
    }
  }, [loadedImages]);

  return (
    <div className='container-paralax'>
      {breakpoint === 0 &&
        <div style={{ display: allImagesLoaded ? 'block' : 'none' }}>
          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0}
            strength={0}
          >
            <img src={cielo} onLoad={handleImageLoad} className='cielo-img-mobile' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.02}
            strength={0.02}
          >
            <img src={nuvola} onLoad={handleImageLoad} className='nuvola-img-mobile' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.1}
            strength={0.05}
          >
            <img src={fog_2} onLoad={handleImageLoad} className='fog-2-img-mobile' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.05}
            strength={0.05}
          >
            <img src={secondo_piano} onLoad={handleImageLoad} className='secondo-piano-img-mobile' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.05}
            strength={0.15}
          >
            <img src={fog_1} onLoad={handleImageLoad} className='fog-1-img-mobile' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.04}
            strength={0.10}
          >
            <img src={laghetto} onLoad={handleImageLoad} className='laghetto-img-mobile' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.02}
            strength={0.02}
          >
            <img src={sun_rays} onLoad={handleImageLoad} className='sun-img-mobile' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.1}
            strength={0.08}
          >
            <div className='title-img-mobile'>
              <p className='first-title' translate="no">{t('WELCOME')}</p>
              <p className='second-title' translate="no">{t('TO_THE')}</p>
              <b translate="no">{t('POLLE')}</b>
            </div>  
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.05}
            strength={0.15}
          >
            <img src={front} onLoad={handleImageLoad} className='front-img-mobile' alt=''/>
          </MouseParallax>
        </div>  
      }
      {breakpoint === 1 && 
        <div style={{ display: allImagesLoaded ? 'block' : 'none' }}>
          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0}
            strength={0}
          >
            <img src={cielo} onLoad={handleImageLoad} className='cielo-img-tablet' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.02}
            strength={0.02}
          >
            <img src={nuvola} onLoad={handleImageLoad} className='nuvola-img-tablet' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.1}
            strength={0.05}
          >
            <img src={fog_2} onLoad={handleImageLoad} className='fog-2-img-tablet' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.05}
            strength={0.09}
          >
            <img src={secondo_piano} onLoad={handleImageLoad} className='secondo-piano-img-tablet' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.05}
            strength={0.13}
          >
            <img src={fog_1} onLoad={handleImageLoad} className='fog-1-img-tablet' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.04}
            strength={0.12}
          >
            <img src={laghetto} onLoad={handleImageLoad} className='laghetto-img-tablet' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.02}
            strength={0.02}
          >
            <img src={sun_rays} onLoad={handleImageLoad} className='sun-img-tablet' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.1}
            strength={0.1}
          >
            <div className='title-img-tablet'>
              <p className='first-title' translate="no">{t('WELCOME')}</p>
              <p className='second-title' translate="no">{t('TO_THE')}</p>
              <b translate="no">{t('POLLE')}</b>
            </div>  
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.05}
            strength={0.15}
          >
            <img src={front} onLoad={handleImageLoad} className='front-img-tablet' alt=''/>
          </MouseParallax>
        </div>  
      }
      {breakpoint === 2 && 
        <div style={{ display: allImagesLoaded ? 'block' : 'none' }}>
          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0}
            strength={0}
          >
            <img src={cielo} onLoad={handleImageLoad} className='cielo-img-pc' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.02}
            strength={0.02}
          >
            <img src={nuvola} onLoad={handleImageLoad} className='nuvola-img-pc' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.1}
            strength={0.05}
          >
            <img src={fog_2} onLoad={handleImageLoad} className='fog-2-img-pc' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.05}
            strength={0.08}
          >
            <img src={secondo_piano} onLoad={handleImageLoad} className='secondo-piano-img-pc' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.05}
            strength={0.15}
          >
            <img src={fog_1} onLoad={handleImageLoad} className='fog-1-img-pc' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.04}
            strength={0.13}
          >
            <img src={laghetto} onLoad={handleImageLoad} className='laghetto-img-pc' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.02}
            strength={0.02}
          >
            <img src={sun_rays} onLoad={handleImageLoad} className='sun-img-pc' alt=''/>
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.1}
            strength={0.1}
          >
            <div className='title-img-pc'>
              <p className='first-title' translate="no">{t('WELCOME')}</p>
              <p className='second-title' translate="no">{t('TO_THE')}</p>
              <b translate="no">{t('POLLE')}</b>
            </div>  
          </MouseParallax>

          <MouseParallax 
            enableOnTouchDevice
            shouldResetPosition 
            shouldPause
            isAbsolutelyPositioned
            lerpEase={0.05}
            strength={0.2}
          >
            <img src={front} onLoad={handleImageLoad} className='front-img-pc' alt=''/>
          </MouseParallax>
        </div>  
      }
      {breakpoint === 3 && <div>{t('HELLO_BIG_MONITOR')}</div>}
    </div>
  );
};

export default ParalaxHome;