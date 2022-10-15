import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const getdata=(url)=>{
   return(
    fetch(url).then((res)=>(
      res.json()
    ))
   )
}
function SingleUserPage () {
  const {user_id}=useParams()
  const[userdetails,setuserdetails]=useState({})
    useEffect(()=>{
      getdata(`https://reqres.in/api/users/${user_id}`)
      .then((res)=>{
        setuserdetails(res.data)
      },[user_id])  

    })
    
    
  return(
  
<>
     <img src= {userdetails.avatar} alt="pic" />
     <p>Name:- {userdetails.first_name} {userdetails.last_name}</p>
     <p>Email:- {userdetails.email}</p>
     <Link to="/user">Go Back</Link>
     </>
  )
  
}

export default SingleUserPage
