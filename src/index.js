import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import LoadingSpinner from '@components/LoadingSpinner';
const App = React.lazy(() => import('./App'));
import { MyDataProvider } from '@components/ScrollData';
import '@styles/App.css';
import './i18n';
import myIcon from '@images/icon.png';

import { HashRouter } from 'react-router-dom';

function Index() {
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

if (!window.location.hash) {
  window.location = window.location + '#/';
}

const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = myIcon;
document.head.appendChild(link);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />);
