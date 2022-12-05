import React, { useReducer } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sideBarMenu, socialIcons } from '../../data/data'
import ReactLogo from '../ReactLogo'
import { BsXLg, BsListNested } from 'react-icons/bs'
import { reducer } from '../../hooks/useReducer'
import './sidebar.scss'

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
}

const Sidebar = React.memo(() => {
  // dispatch reducer functionality
  const [state, dispatch] = useReducer(reducer, defaultOptions)
  return (
    <>
      <BsListNested
        onClick={() => dispatch({ type: 'OPEN_NAVBAR' })}
        className="menu-icon switch__color"
      />
      <aside
        className={`${state.openCloseNav1 ? 'aside open-sidebar' : 'aside'} ${
          state.showAside1 ? 'aside show-asideBar' : 'aside'
        }`}
      >
        <div className="aside-wrapper">
          <BsXLg
            onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
            className="close-btn switch__color"
          />
          <ReactLogo />
          <ul className="side-link">
            {sideBarMenu.map((link, index) => {
              const { text, icon, url } = link
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
                    className={({ isActive }) => {
                      return isActive ? 'nav__links active-links' : 'nav__links'
                    }}
                    to={url}
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div className="social-icon">
            {socialIcons.map((icons, index) => {
              const { icon, url } = icons
              return (
                <a href={url} key={index}>
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </aside>
    </>
  )
})

export default Sidebar
