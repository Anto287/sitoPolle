import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
const App = React.lazy(() => import('./App'));
import '@styles/App.css';
import myIcon from '@images/icon.png';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const basename = process.env.BASENAME || '';

function Index() {
  return (
    <React.StrictMode>
      <BrowserRouter basename={basename}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}


const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = myIcon;
document.head.appendChild(link);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />);
