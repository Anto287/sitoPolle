import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import Layout from '@components/Layout';
import NoPage from '@pages/NoPage';

import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
