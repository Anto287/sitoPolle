import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';
import imgHome from '@images/img_paralax_home/img_home.jpeg';

const ParalaxHome = () => {
  const { t } = useTranslation();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  const [loading, setLoading] = useState(true);
  
  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const images = document.querySelectorAll('img');
    
    let loadedImagesCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedImagesCount++;
      } else {
        img.addEventListener('load', () => {
          loadedImagesCount++;
          if (loadedImagesCount === images.length) {
            setLoading(false);
          }
        });
      }
    });

    if (loadedImagesCount === images.length) {
      setLoading(false);
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, []);
  
  return (
    <div>
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <div>
          {breakpoint === 0 && <div>{t('HELLO_MOBILE')}</div>}
          {breakpoint === 1 && <div>{t('HELLO_TABLET')}</div>}
          {breakpoint === 2 && 
            <div>
              <img src={imgHome} />
            </div>
          }
          {breakpoint === 3 && <div>{t('HELLO_BIG_MONITOR')}</div>}
        </div>
      )}
    </div>
  );
};

export default ParalaxHome;