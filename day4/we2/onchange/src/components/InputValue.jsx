import React from 'react'
import { useState } from 'react'

function InputValue() {
    const [text,settext]=useState("")
    const handleonchange=(e)=>{
           settext(e.target.value)
    }
    const handleonclick=()=>{
        settext("")
    }
  return (
    <div>
      <input value={text} onChange={handleonchange} type="text" />
      <button onClick={handleonclick}  >CLEAR TEXT</button>
      <h2> TEXT:{text}</h2>
    </div>
  )
}

export default InputValue
