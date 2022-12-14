import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Fade from 'react-reveal/Fade'
import { projects } from './indexProjectsProfile'
import { Project } from '../../components'
import { Blast } from '../../components'
import { NavBar } from '../../components/navigation/desktop/nav-bar';
import './blogpage.scss'

const Blog = () => {

  return (
      <div className="animationProfileContainer">
        {projects.map((project, index) => {
          return <Project {...project} key={index} />
        })}
      </div>
  )
}

export default Blog;
