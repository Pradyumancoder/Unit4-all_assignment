import React, { useState } from 'react'

function Addtodo({handleclick}){
    const [text,settext]=useState ("")
    
    const handlechange=(e)=>{
      settext(e.target.value)
    }
    const onclick=()=>{
      handleclick(text)
    }
    return(
      <div>
         <input value={text} onChange={handlechange} type="text" />
        <button onClick={onclick}>ADD</button>
        
      </div>
    )
  }

export default Addtodo
