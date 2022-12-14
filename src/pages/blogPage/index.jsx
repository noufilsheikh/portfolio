import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Fade from 'react-reveal/Fade'
import { projects } from './indexProjectsProfile'
import { Project } from '../../components'
import { Blast } from '../../components'
import { NavBar } from '../../components/navigation/desktop/nav-bar';
import './blogpage.scss'

const Blog = () => {


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
          <span className="profile__description">{user.email}</span>

          <NavBar />


      <div className="animationProfileContainer">
        {projects.map((project, index) => {
          return <Project {...project} key={index} />
        })}
      </div>

      </div>
      </div>
     
      
      </div>
    </div>


  )
}

export default Blog;
