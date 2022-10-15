import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Gitadd } from './api'
function Githubapi() {
    const [data,setdata]=useState([])
    const [pagination,setpagination]=useState(1)
    useEffect(()=>{
     Gitadd({
        per_page:9,
        page:4,
        sort:"asc"
     })
     .then((res)=>{
         console.log(res)
         setdata(res.data.items);
     })
     .catch((err)=>{
         console.log(err)
     })
    })
  return (
   <div>
    <h1>github</h1>
    {
      data.map((item)=>(
        <div key={item.login}> 
                {item.login}
        </div>
      ))
    
    }
    <button onClick={()=> setpagination(pagination-1)}>prev</button>
    <button>{pagination}</button>
    <button onClick={()=> setpagination(pagination+1)}>Next</button>
   </div>
    



 
  
    )

}

export default Githubapi;
