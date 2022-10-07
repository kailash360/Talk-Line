import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
//Pages linked from NavBar
import About from './main_pages/About'
import Home from './main_pages/Home'
import Chat from './main_pages/Chat'
import Profile from './main_pages/Profile'
import PostList from './posts/PostList'
import Post from './posts/Post'
import Signup from './Signup'
import Login from './Login'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<Post />} />

      </Routes>
    </div>
  )
}

export default Layout