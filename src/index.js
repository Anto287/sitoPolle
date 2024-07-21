import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
const App = React.lazy(() => import('./App'));
import '@styles/App.css';
import myIcon from '@images/icon.png';

import { HashRouter } from 'react-router-dom';

const basename = process.env.BASENAME || '';

function Index() {
  return (
    <React.StrictMode>
      <HashRouter basename={basename}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
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
