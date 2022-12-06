import { Link, NavLink } from 'react-router-dom'
import './animation-profile-button.scss'

export const AnimationProfileButton = () => {
    return (
<div className="animationProfileButton">
      <span className="bg switch__bg"></span>
      <span className="base switch__border-color"></span>
<NavLink to="/animationProfile" className="textAnimationProfile">
  Animations
</NavLink>
</div>

)
};