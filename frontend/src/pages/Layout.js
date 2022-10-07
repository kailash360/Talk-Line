import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
//Pages linked from NavBar
import About from './About'
import Home from './Home'
import Chat from './Chat'
import Profile from './Profile'
import Signup from './Signup'
import Login from './Login'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default Layout