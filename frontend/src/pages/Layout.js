import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
/*----Pages linked from Navbar----*/
import About from './About'
import Home from './Home'
import Chat from './Chat'
import Profile from './Profile'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default Layout