import React from "react"
import ReactDOM from "react-dom"
// Update the import path in your index.js or another entry point file
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <Auth0Provider
    domain="dev-afb7namhi62igfw4.us.auth0.com"
    clientId="32lLsjRI6wsyEYUgeUQIURmT2n5e3KXm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
)