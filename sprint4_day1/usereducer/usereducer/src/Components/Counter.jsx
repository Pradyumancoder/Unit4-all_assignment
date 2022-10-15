
import React, { useReducer } from 'react'

const useReducerApp=(state,action)=>{
    // if(action.type=== "INCREMENT"){
    //     return state+1
    // }
    // if(action.type=== "DECREMENT"){
    //     return state-1
    // }
    // if(action.type=== "RESET"){
    //     return 0;
    // }
    // return state
    switch(action.type){
        case "INCREMENT":
          return state+1000
  
          case "DECREMENT":
            return state-1000
  
            case "RESET":
              return 0
  
              default:
                return state;
      }
}

function Counter() {
    const [state,dispatcher]=useReducer(useReducerApp,0)
    // const INCREMENT=()=>{
    //   type : "INCREMENT"
    // }
    // const DECREMENT=()=>{
    //   type : "DECREMENT"
    // }
    // const RESET=()=>{
    //     type : "RESET"
    // }
  return (
    <div>
      <h1>count: {state}</h1>
      <button onClick={()=>dispatcher({ type : "INCREMENT"})}>INCREMENT</button>
      <button onClick={()=>dispatcher({ type : "DECREMENT"})}>DECREMENT</button>
      <button onClick={()=>dispatcher({ type :"RESET"})}>RESET</button>
    </div>
  )
}

export default Counter
