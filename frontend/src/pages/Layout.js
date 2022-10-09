import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from './About'
import Home from './Home'
import Chat from './Chat'
import Profile from './Profile'
import Signup from './auth/Signup'
import Login from './auth/Login'
import Feed from '../components/Feed'
import Post from '../components/Post'

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
        <Route path="*" element={<div>404</div>} /> {/* just adding a 404 catch here */}
      </Routes>
    </div>
  )
}

export default Layout