import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { AnimationProfileButton } from "../../buttons/animation-profile-button";
import { ProjectsProfileButton } from "../../buttons/projects-profile-button";
import { LoginButton } from "../../buttons/login-button";
import { LogoutButton } from "../../buttons/logout-button";
import { SignupButton } from "../../buttons/signup-button";
import './nav-bar-buttons.scss'

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="navBarButtons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>


      )}
  <AnimationProfileButton />
  <ProjectsProfileButton />
      
      </div>



     
  );
};
