import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProfilePage } from "./pages/profile-page";
import { ProtectedRoute } from "./components/protected-route";
import AnimationProfile from './pages/animationProfile'

// pages
import {
  Home,
  About,
  Contact,
  Gaming,
  ProjectPage,
  ErrorPage,
  Tutorial,
} from './pages'

import BlogPage from './pages/blogPage'

// components
import { Sidebar, ThemeTemplate } from './components'

import './utils/templateColors.scss'

const App = () => {
  return (
    <BrowserRouter>
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
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
