import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-afb7namhi62igfw4.us.auth0.com"
    clientId="32lLsjRI6wsyEYUgeUQIURmT2n5e3KXm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);

reportWebVitals();
