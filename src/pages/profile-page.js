import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBar } from '../components/navigation/desktop/nav-bar';
import  BlogPage   from './blogPage'

import './Profile-page.scss';

export const ProfilePage = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (

    <div className="profileContainer">
        
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profileEmail">{user.email}</span>

                <NavBar />
                <BlogPage/>
              </div>
            </div>
           
            
            </div>
          </div>
   
     
   

  );
};
