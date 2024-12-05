import React, { useEffect, useState } from 'react';

import ParalaxHome from '@components/ParalaxHome';
import DescriptionHome from '@components/DescriptionHome';

import '@styles/HomeStyle.css';

const HomePage = ({ pageArleadyStart }) => {  
  const [isParalaxLoaded, setIsParalaxLoaded] = useState(false);
  
  const handleParalaxLoad = () => {
    setIsParalaxLoaded(true);
  };

  useEffect(() => {
    if (isParalaxLoaded) {
      pageArleadyStart();
    }
  }, [isParalaxLoaded]);

  return (
    <>
      <div className="container-page">
        <div className='contaienr-paralax-effect' style={{visibility: isParalaxLoaded ? 'visible' : 'hidden'}}>
          <ParalaxHome onLoad={handleParalaxLoad}/>
        </div>
        <DescriptionHome />
      </div>
    </>
  );
};

export default HomePage;
