import React, { useState } from 'react';

import ParalaxHome from '@components/ParalaxHome';
import DescriptionHome from '@components/DescriptionHome';

import '@styles/HomeStyle.css';

const HomePage = () => {  
  const [isParalaxLoaded, setIsParalaxLoaded] = useState(false);
  
  const handleParalaxLoad = () => {
    setIsParalaxLoaded(true);
  };

  return (
    <>
      <div className="container-page">
        <div className='contaienr-paralax-effect' style={{display: isParalaxLoaded ? 'block' : 'none'}}>
          <ParalaxHome onLoad={handleParalaxLoad}/>
        </div>
        <DescriptionHome />
      </div>
    </>
  );
};

export default HomePage;
