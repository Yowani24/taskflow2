import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = "http://localhost:5173/"; // process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = "cmVdAuZzYCVKqA7731c1QU1kdtkPqMoA"; //process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = "http://localhost:4040/callback"; //process.env.REACT_APP_AUTH0_CALLBACK_URL;

  //   REACT_APP_API_SERVER_URL=http://localhost:5173/
  // REACT_APP_AUTH0_DOMAIN=dev-qncu78cs0u83bjy5.us.auth0.com
  // REACT_APP_AUTH0_CLIENT_ID=cmVdAuZzYCVKqA7731c1QU1kdtkPqMoA
  // REACT_APP_AUTH0_CALLBACK_URL=http://localhost:4040/callback

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
