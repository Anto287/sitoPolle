import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Index(){
  return(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
  )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Index />);