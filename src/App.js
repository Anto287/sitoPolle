import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import Layout from '@components/Layout';

import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <Routes>
      <Route path="sitoPolle/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sitoPolle/home" element={<HomePage />} />
        <Route path="sitoPolle/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
