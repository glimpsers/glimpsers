//package
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

//utilities

//components

//style
import { GlobalStyle } from './assets/style/Style';

//root
import App from './App';

ReactDOM.render(

  <StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <GlobalStyle />
      <App />
    </Auth0Provider>
  </StrictMode>,
  document.getElementById('root')
);
