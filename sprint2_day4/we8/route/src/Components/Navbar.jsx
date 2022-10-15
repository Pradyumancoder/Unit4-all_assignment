import React from 'react'
import { Link } from 'react-router-dom'


const Links=[
    {path:"/" ,title:"Home" },
    {path:"/about" ,title:"About" },
    {path:"/contact" ,title:"Contact" },
    {path:"/user" ,title:"User" },
    {path:"/login" ,title:"Login" }
 ]
function Navbar() {
  return (
   
    <div style={{display:"flex",
                 justifyContent:'space-around',
                 alignItems:"center" ,
                 width:"80%", 
                 margin:"auto"}}>
    {
        Links.map((link)=>(
            <div><Link key={link.path} to={link.path }>{link.title }</Link></div>
        ))
    }
    {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/login">Login</Link> */}
    </div>
  )
}

export default Navbar
