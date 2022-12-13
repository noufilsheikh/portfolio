import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ProfilePage } from "./pages/profile-page";
import { ProtectedRoute } from "./components/protected-route";
import AnimationProfile from './pages/animationProfile'
import { Scale } from 'react-scaling';

// pages
import {
  Home,
  About,
  Contact,
  Gaming,
  ProjectPage,
  ErrorPage,
} from './pages'

import BlogPage from './pages/blogPage'

// components
import { Sidebar, ThemeTemplate } from './components'

import './utils/templateColors.scss'

const App = () => {


  return (

    <HashRouter>
      <Sidebar />
      <ThemeTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={ProfilePage} />}
        />
        <Route
          path="/animationProfile"
          element={<ProtectedRoute component={AnimationProfile} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>

    
  )
}


export default App;

