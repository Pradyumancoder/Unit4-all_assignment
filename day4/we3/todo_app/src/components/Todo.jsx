import React from 'react'
import { useState } from 'react'

function Todo() {
    const [text,settext]=useState(" ");
    const [todos,settodos]=useState([]);

    const handleonchange=(e)=>{
        settext(e.target.value)
    }
    
    const handleclear=()=>{
        settext(" ")
    }
    const handleadd=()=>{
        settodos([...todos,text]);
        handleclear()
    }
 
  return (
    <div>
      <input value={text} onChange={handleonchange} type="text" />
   
      <button onClick={handleadd} >ADD</button>
      {/* <h2>{text}</h2> */}

      <ul>
      {
        todos.map((todo)=>(
            <li>{todo}</li>
        ))
    }
    </ul>
    </div>
  )
}

export default Todo
// jdfljdjfdjlfjld
// ndflndfldlfldfldlfml
// fdklfndfkldklfjkldjfklj