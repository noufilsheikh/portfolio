import { Link, NavLink } from 'react-router-dom'
import './projects-profile-button.scss'

export const ProjectsProfileButton = () => {
    return (
<div className="projectsProfileButton">
      <span className="bg switch__bg"></span>
      <span className="base switch__border-color"></span>
<NavLink to="/profile" className="textProjectsProfile">
  Projects
</NavLink>
</div>

)
};