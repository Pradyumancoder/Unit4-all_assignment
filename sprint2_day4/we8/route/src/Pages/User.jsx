import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const getdata=(url)=>{
  return fetch(url).then((res)=>res.json())
}
function User() {
    const [data,setdata]=useState({})
   
    useEffect(()=>{
        getdata(`https://reqres.in/api/users?page=2`)
        .then((res)=>{
           setdata(res)
        })
    //    .catch((err)=>{
    //     console.log(err)
    //    })
    },[])
    
    return (
        <div>
       <h1>user page</h1>
       <ul>
        {
          
            data && data.data && data.data.map((el)=>(
                <div>
                <img src={el.avatar} alt="prof-pic" />
             <div key={el.id}>  <Link to={`/user/${el.id}`}>more details</Link></div> 
            
             </div>
            ))
          
        }
        </ul>
   </div>
  )
}

export default User
