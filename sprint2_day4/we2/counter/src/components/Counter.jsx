import React, { useRef, useState } from "react";
import { useEffect } from "react";
// useEffect(()=>{
// })
function Counter(){
    const [count,setcount]=useState(0);
    const timerRef=useRef(null)
    useEffect(()=>{
        return stopTimer;
    },[]);
    console.log(timerRef)

    const startTimer=()=>{
        if(timerRef.current!==null) 
        return;
        timerRef.current=setInterval(()=>{
            setcount((count)=>count+1)
        },1000)
    };
    const stopTimer=()=>{
        clearInterval(timerRef.current);
        timerRef.current=null;
    };
    const resetTimer=()=>{
        stopTimer();
        setcount(0)
        console.log(setcout)
    };
    return(
        <div>
            <h3  >hii</h3>
            <h2 contentEditable>counter:{count}</h2>
            <button onClick={startTimer}>start</button>
            <button onClick={stopTimer}>stop</button>
            <button onClick={resetTimer}>reset</button>
        </div>
    )
}
export default Counter