import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

const reducerlogictoupdate=((state,action)=>{
     if(action.type=== "Increment_count"){
        return state + 1000
     }
     if(action.type=== "Decrement_count"){
        return state -1000
     }
     if(action.type ==="Reset_count"){
      return 0;
     }
     return state;
     
     
})

function Reducer() {

    const [count,dispatch]=useReducer(reducerlogictoupdate,0)

    // const handleadd=(()=>{
    //     setcount(count+1)
    // })
    // const handlereduce=(()=>{
    //     setcount(count-1)
    // })

  return (
    
    <div>
        <h1>VALUE:{count}</h1>
      <button onClick={()=> dispatch({type:"Increment_count"})}>Increment</button>
     
      <button onClick ={()=> dispatch({type:"Decrement_count"})}>Decrement</button>
      <button onClick ={()=> dispatch({type:"Reset_count"})}>Reset</button>
    </div>
  )
}

export default Reducer
