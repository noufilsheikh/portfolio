import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './login-button.scss';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: https://glitxherrr.github.io/portfolioreference/,
    });
  };

  return (
    <div className="log-inButton">
    <span className="bg switch__bg"></span>
    <span className="base switch__border-color"></span>
    <span className="text" onClick={handleLogout}>
      Log Out
    </span>
    </div>
  );
};
