import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Auth0Provider } from "@auth0/auth0-react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_domain}
    clientId={process.env.REACT_APP_clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);