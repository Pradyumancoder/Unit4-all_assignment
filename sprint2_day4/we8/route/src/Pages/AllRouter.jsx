import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Login from './Login'
import PageNotfound from './NotFoundUserPage'
import SingleUserPage from './SingleUserPage'
import User from './User'

function AllRouter() {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/user" element={<User/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/user/:user_id" element={<SingleUserPage/>}/>
       <Route path="*" element={<PageNotfound/>}/>
    </Routes>
    </div>
  )
}

export default AllRouter
