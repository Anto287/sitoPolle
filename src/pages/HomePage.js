import React from 'react';

import ParalaxHome from '@components/ParalaxHome';

import '@styles/HomeStyle.css';

const HomePage = () => {  
  return (
    <>
      <div className="container-page">
        <div className='contaienr-paralax-effect'>
          <ParalaxHome />
        </div>
      </div>
    </>
  );
};

export default HomePage;
