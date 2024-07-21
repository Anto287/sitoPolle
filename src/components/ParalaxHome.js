import React from 'react';
import { UseResponsiveJSX } from '@components/UseResponsiveJSX';

const ParalaxHome = () => {
  const breakpoint = UseResponsiveJSX([600, 1200, 2000]); 
  
  return (
    <div>
        {breakpoint === 0 && <div>CIAO TELEFONO</div>}
        {breakpoint === 1 && <div>CIAO TABLET</div>}
        {breakpoint === 2 && <div>CIAO PC</div>}
        {breakpoint === 3 && <div>CIAO GRANDE MONITOR</div>}
    </div>
  );
};

export default ParalaxHome;