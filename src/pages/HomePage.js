import React from 'react';

import ParalaxHome from '@components/ParalaxHome';
import DescriptionHome from '@components/DescriptionHome';

import '@styles/HomeStyle.css';

const HomePage = () => {  
  return (
    <>
      <div className="container-page">
        <div className='contaienr-paralax-effect'>
          <ParalaxHome />
        </div>
        <DescriptionHome />
      </div>
    </>
  );
};

export default HomePage;
