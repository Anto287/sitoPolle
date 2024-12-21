import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import LoadingSpinner from '@components/LoadingSpinner';
import { MyDataProvider } from '@components/ScrollData';
import '@styles/App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './i18n';
import myIcon from '@images/img_topbar/icon.webp';

const App = React.lazy(() => import('./App'));

function Index() {
  // Preload App per migliorare le prestazioni
  useEffect(() => {
    import('./App');
  }, []);

  return (
    <React.StrictMode>
      <HashRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <MyDataProvider>
            <App />
          </MyDataProvider>
        </Suspense>
      </HashRouter>
    </React.StrictMode>
  );
}

// Reindirizzamento automatico alla home
if (!window.location.hash) {
  window.location.hash = '#/home';
}

// Setto la mia icona
const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/webp';
link.href = myIcon;
document.head.appendChild(link);

// Creazione della root React
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />);
