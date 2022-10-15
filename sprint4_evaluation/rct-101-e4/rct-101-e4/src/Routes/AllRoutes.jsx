
import React from 'react'
import Dashboard from './Dashboard'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
function AllRoutes() {
  return (
    <div>
      <Routes>
       
        <Route path="/dashboard" element={Dashboard}/>
        <Route path="" element={Login}/>
    
      </Routes>
    </div>
  )
}

export default AllRoutes
