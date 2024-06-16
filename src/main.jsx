import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import './index.css';

// Cargar variables de entorno
const initialOptions = {
  "client-id": import.meta.env.VITE_REACT_APP_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PayPalScriptProvider options={initialOptions}>
    <App />
  </PayPalScriptProvider>
);
