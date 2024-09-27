import React, { useEffect, useState, useRef } from 'react';
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

const ParalaxHome = ({ onLoad }) => {
  const { t } = useTranslation();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]);
  const [loadedImages, setLoadedImages] = useState(0);
  const [errorPageLoaded, setErrorPageLoaded] = useState(false);
  const [gyroData, setGyroData] = useState({ alpha: 0, beta: 0 });
  const loadedFlags = useRef({});

  const imageSources = [cielo, nuvola, fog_2, secondo_piano, fog_1, laghetto, sun_rays, front];

  useEffect(() => {
    if (loadedImages === imageSources.length || errorPageLoaded) {
      onLoad();
    }
  }, [loadedImages]);

  useEffect(() => {
    const handleDeviceOrientation = (event) => {
      const { alpha, beta } = event;
      setGyroData({ alpha, beta });
    };

    if (breakpoint <= 1) {
      window.addEventListener('deviceorientation', handleDeviceOrientation, true);
      return () => window.removeEventListener('deviceorientation', handleDeviceOrientation);
    }
  }, [breakpoint]);

  const gyroX = (gyroData.alpha > 180 ? gyroData.alpha - 360 : gyroData.alpha) || 0;
  const gyroY = (gyroData.beta - 90) || 0;

  const lerp = (start, end, t) => start + (end - start) * t;

  const getGyroStyle = (lerpEase, strength) => {
    const transitionX = Math.max(Math.min(gyroX * strength, 100), -100);
    const transitionY = Math.max(Math.min(gyroY * strength, 50), -50);

    const newX = lerp(currentX.current, transitionX, lerpEase);
    const newY = lerp(currentY.current, transitionY, lerpEase);
    currentX.current = newX;
    currentY.current = newY;

    return {
      height: '100vh',
      width: '100vw',
      transform: `translate(${newX}px, ${newY}px) translateZ(0)`,
    };
  };

  const currentX = useRef(0);
  const currentY = useRef(0);

  const handleImageLoad = (src) => {
    if (!loadedFlags.current[src]) {
      setLoadedImages(prevLoadedImages => prevLoadedImages + 1);
      loadedFlags.current[src] = true;
    }
  };
  
  const handleImageError = () => setErrorPageLoaded(true);

  const renderParallaxLayer = (src, className, style, lerpEase, strength) => (
    <MouseParallax
      key={src}
      enableOnTouchDevice
      shouldResetPosition
      shouldPause
      isAbsolutelyPositioned
      lerpEase={lerpEase}
      strength={strength}
    >
      <div style={style}>
        <img 
          src={src} 
          onLoad={() => handleImageLoad(src)} 
          onError={handleImageError} 
          className={className} 
          alt='' 
        />
      </div>
    </MouseParallax>
  );

  const renderContent = (deviceClass, titlesClass) => (
    <>
      {renderParallaxLayer(cielo, `cielo-${deviceClass}`, {}, 0, 0)}
      {renderParallaxLayer(nuvola, `nuvola-${deviceClass}`, getGyroStyle(0.7, 0.2), 0.02, 0.02)}
      {renderParallaxLayer(fog_2, `fog-2-${deviceClass}`, getGyroStyle(0.7, 0.45), 0.1, 0.05)}
      {renderParallaxLayer(secondo_piano, `secondo-piano-${deviceClass}`, getGyroStyle(0.7, 0.45), 0.05, 0.05)}
      {renderParallaxLayer(laghetto, `laghetto-${deviceClass}`, getGyroStyle(0.7, 0.5), 0.04, 0.1)}
      {renderParallaxLayer(fog_1, `fog-1-${deviceClass}`, getGyroStyle(0.7, 0.55), 0.05, 0.15)}
      {renderParallaxLayer(sun_rays, `sun-rays-${deviceClass}`, getGyroStyle(0.7, 0.4), 0.02, 0.02)}
      <MouseParallax enableOnTouchDevice shouldResetPosition shouldPause isAbsolutelyPositioned lerpEase={0.1} strength={0.1}>
        <div className={titlesClass}>
          <p className='first-title' translate="no">{t('WELCOME')}</p>
          <p className='second-title' translate="no">{t('TO_THE')}</p>
          <b translate="no">{t('POLLE')}</b>
        </div>
      </MouseParallax>
      {renderParallaxLayer(front, `front-${deviceClass}`, getGyroStyle(0.7, 0.55), 0.05, 0.15)}
    </>
  );

  return (
    <div className='container-paralax'>
      {breakpoint === 0 && !errorPageLoaded && renderContent('img-mobile', 'title-img-mobile')}
      {breakpoint === 1 && !errorPageLoaded && renderContent('img-tablet', 'title-img-tablet')}
      {breakpoint === 2 && !errorPageLoaded && renderContent('img-pc', 'title-img-pc')}
      {breakpoint === 3 && !errorPageLoaded && renderContent('img-big-monitor', 'title-img-big-monitor')}
      {errorPageLoaded && 
        <div className="error-load">
          <p className='first-title' translate="no">{t('WELCOME')}</p>
          <p className='second-title' translate="no">{t('TO_THE')}</p>
          <b translate="no">{t('POLLE')}</b>
        </div>
      }
      <div className='gradient-for-background'></div>
    </div>
  );
};

export default ParalaxHome;