import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Client from 'shopify-buy';

import './assets/styles/style.css'
import './assets/styles/custom.css'

const client = Client.buildClient({
  storefrontAccessToken: "343ca4edd49cdb49d5fd98251dffae10", // original orchid
  // storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
  domain: "the-orchid-patio.myshopify.com",
});

ReactDOM.render(
  <React.StrictMode>
    <App client={client} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
