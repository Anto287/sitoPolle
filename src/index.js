import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@styles/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Index() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

import myIcon from '@images/icon.png';

const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = myIcon;
document.head.appendChild(link);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />);
