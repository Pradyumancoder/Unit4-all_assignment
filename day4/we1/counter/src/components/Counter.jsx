import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count,setcount]=useState(0)

    const handleincrement=()=>{
        setcount(count+1)
    }
    const handledecrement=()=>{
        setcount(count-1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleincrement }>increment</button>
        <button onClick={handledecrement}>decrement</button>
      
    </div>
  )
}

export default Counter
