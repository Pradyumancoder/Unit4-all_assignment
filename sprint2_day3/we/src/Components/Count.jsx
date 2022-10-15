import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Count(){
    const [counter,setcounter]=useState(0);
useEffect(
    function callback(){
        console.log(`title has changed`)
        document.title=`Clicked ${counter} times`
        
    },[counter])





    return(
        <div>
           <h1>Counter:{counter}</h1>
<button onClick={()=>setcounter(counter+1)}>Increment</button> 

<button onClick={()=>setcounter(counter-1)}>decrement</button> 

        </div>

    )
    }
export default Count;