import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import Layout from '@components/Layout';
import NoPage from '@pages/NoPage';

const App = () => {
  // Stato per animazioni di caricamento della pagina
  const [startAnimation, setStartAnimation] = useState(false);

  // Gestione del percorso attuale
  const location = useLocation();

  // Funzione per avviare l'animazione della pagina
  const pageStart = () => {
    setStartAnimation(true);
  };

  // Effetto per resettare l'animazione al cambio di percorso
  useEffect(() => {
    setStartAnimation(false);
  }, [location.pathname]);

  return (
    <Routes>
      {/* Layout principale con Topbar */}
      <Route path="/" element={<Layout showTopbar={true} startPage={startAnimation} />}>
        <Route index element={<HomePage pageArleadyStart={pageStart} />} />
        <Route path="home" element={<HomePage pageArleadyStart={pageStart} />} />
        <Route path="about" element={<AboutPage />} />
      </Route>

      {/* Layout per pagine non trovate */}
      <Route path="*" element={<Layout showTopbar={false} startPage="error" />}>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;