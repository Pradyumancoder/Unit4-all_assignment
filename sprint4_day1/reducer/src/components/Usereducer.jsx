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
     if(action.type==="Increment_count_by_value"){
        return state + action.payload;
     }


     return state;
     
     
})

function Usereducer() {

    const [count,dispatch]=useReducer(reducerlogictoupdate,0)
    const [value,setvalue]=useState([]);
    const Incrementbyvalue =(amount)=>{
      return{
        type:"Increment_count_by_value",
        payload:amount
      }
    }

  return (
    
    <div>
  
        <h1>VALUE:{count}</h1>
          <input value={value}
          onChange={(e)=>setvalue(Number(e.target.value))}
          placeholder="increment by"
          />
      <button onClick={()=> dispatch({type:"Increment_count"})}>Increment</button>
      <button onClick ={()=> dispatch({type:"Decrement_count"})}>Decrement</button>
      <button onClick={()=> dispatch(Incrementbyvalue(value))}>add by value</button>
    

    </div>
  )
}

export default Usereducer
