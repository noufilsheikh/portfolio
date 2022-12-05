import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './signup-button.scss';

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      prompt: "login",
      screen_hint: "signup",
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <div className="sign-upButton">
    <span className="bg switch__bg"></span>
    <span className="base switch__border-color"></span>
    <span className="text" onClick={handleSignUp}>
      Sign Up
    </span>
    </div>
  );
};
