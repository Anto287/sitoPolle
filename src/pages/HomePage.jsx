import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import ParalaxHome from '@components/ParalaxHome';
import WhoAreHome from '@components/WhoAreHome';
import DescriptionHome from '@components/DescriptionHome';
import '@styles/HomeStyle.css';

gsap.registerPlugin(useGSAP);

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
        <div className='container-paralax-effect' style={{visibility: isParalaxLoaded ? 'visible' : 'hidden'}}>
          <ParalaxHome onLoad={handleParalaxLoad}/>
        </div>
        <WhoAreHome />
        <DescriptionHome />
      </div>
    </>
  );
};

export default HomePage;
