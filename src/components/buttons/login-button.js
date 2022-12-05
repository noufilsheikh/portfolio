import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './login-button.scss';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      prompt: "login",
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
      <div className="log-inButton">
      <span className="bg switch__bg"></span>
      <span className="base switch__border-color"></span>
      <span className="text" onClick={handleLogin}>
        Log In
      </span>
      </div>
  );
};
