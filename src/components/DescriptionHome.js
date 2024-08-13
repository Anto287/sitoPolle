import React from 'react';
import { useTranslation } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';

const DescriptionHome = () => {
  const { t } = useTranslation();
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  
  return (
    <div>
      {breakpoint === 0 && <div>{t('HELLO_MOBILE')}</div>}
      {breakpoint === 1 && <div>{t('HELLO_TABLET')}</div>}
      {breakpoint === 2 && 
        <div style={{minHeight: '100vh'}}>
          ciao
        </div>
      }
      {breakpoint === 3 && <div>{t('HELLO_BIG_MONITOR')}</div>}
    </div>
  );
};

export default DescriptionHome;