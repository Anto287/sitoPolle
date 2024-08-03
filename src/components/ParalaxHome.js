import React from 'react';
import { withNamespaces } from 'react-i18next';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';

const ParalaxHome = ({t}) => {
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  
  return (
    <div>
        {breakpoint === 0 && <div>{t('HELLO_MOBILE')}</div>}
        {breakpoint === 1 && <div>{t('HELLO_TABLET')}</div>}
        {breakpoint === 2 && <div>{t('HELLO_PC')}</div>}
        {breakpoint === 3 && <div>{t('HELLO_BIG_MONITOR')}</div>}
    </div>
  );
};

export default withNamespaces()(ParalaxHome);