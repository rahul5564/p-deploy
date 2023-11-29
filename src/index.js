import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './App';

import { CartContext,Cartprovider } from './Pages/cartProvider.js/card';
export { CartContext };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <BrowserRouter>
      <Cartprovider>
        <App />
      </Cartprovider>
    </BrowserRouter>
  </>
);
