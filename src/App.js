import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import Layout from '@components/Layout';
import NoPage from '@pages/NoPage';

const App = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const pageStart = () => {
    setStartAnimation(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout showTopbar={true} startPage={startAnimation}/>}>
        <Route index element={<HomePage pageArleadyStart={pageStart}/>} />
        <Route path="home" element={<HomePage pageArleadyStart={pageStart}/>} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<Layout showTopbar={false} />}>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;