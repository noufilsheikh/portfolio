import React from 'react'
import './logo.scss'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap'
import LogoTitle from '../../assets/images/logo-node.png'

const Logo = () => {
  const bgRef = React.useRef()
  const outLineRef = React.useRef()
  const outLineRef2 = React.useRef()
  const solidLogoRef = React.useRef()

  React.useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    setTimeout(() => {
      gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from(outLineRef.current, {
          drawSVG: 0,
          duration: 4,
        })
        .from(outLineRef2.current, {
          drawSVG: 0,
          duration: 4,
        })
      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 0.065,
          delay: 4,
          duration: 10,
        },
      )
    }, 4000)
  }, [])

  return (
    <div className="logo-container switch__stroke-color" ref={bgRef}>
      <img className = "imgHome"
              src={LogoTitle}/>
  </div>
  )
}

export default Logo
