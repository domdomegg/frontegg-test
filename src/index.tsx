import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://domdomegg.frontegg.com',
  clientId: 'd44955c4-370a-478b-856e-bc5f3b94b853'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
      <App />
    </FronteggProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
