import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function Timer(){

const [count,setcount]=useState(0);


 const starttimer=()=>{

  setInterval(()=>{
    console.log(`closure : value is ${count}`)
    setcount((prev)=>prev+1);
  }, 1000)
  
}
// upper one has 1st method 
useEffect(()=>{

    starttimer()
  
},[]);

return(
    <div>
        <h1 style={{background:"blue",color:"yellow"}}>
            Timer:{count}
        </h1>
    </div>
)
}
// it has 2nd method 


