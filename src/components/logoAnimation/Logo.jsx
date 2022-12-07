import React from 'react'
import './logo.scss'
import LogoTitle from '../../assets/images/logo-node.png'

function Logo () {
  

  return (
    <div className="logo-container switch__stroke-color" >
      <img className = "imgHome"
              src={LogoTitle}/>
  </div>
  )
}

export default Logo
