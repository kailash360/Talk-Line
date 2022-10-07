import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
//Pages linked from NavBar
import About from './main_pages/About'
import Home from './main_pages/Home'
import Chat from './main_pages/Chat'
import Profile from './main_pages/Profile'
import Signup from './Signup'
import Login from './Login'
import Feed from './posts/Feed'
import Post from './posts/Post'


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Feed />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default Layout