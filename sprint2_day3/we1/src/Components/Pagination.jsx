import React, { useEffect } from "react";
import { useState } from "react";
function Pagination(){
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1)
    const[loading,setLoading]=useState(false);
    const getTodos=async(p=1)=>{
        try{
            setLoading(true);
            let data=await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${p}&_limit=10`

            )
            data=await data.json();
            console.log(data)
            setData(data)
            setLoading(false);
        }
        catch(err){
            setLoading(false);
            console.log(err)

        }
    }
    useEffect(()=>{
   getTodos(page)
    },[page])
    return(
    
        <div>
            <h1>Todos</h1>
            <button onClick={()=>setPage(page=>page-1)} disabled={page==1}>Prev</button>
            <span style={{padding:"0.5rem"}}>{page}</span>
            <button onClick={()=>setPage(page=>page+1)} disabled={page==20}>NEXT</button>
            <div>
                {loading && <h3>Loading</h3>}
            </div>
        <div>
        {
            data.map(todo=>
                <div style={{display:"flex",gap:"1rem"}}>
                <div>{todo.id}</div>
                <div>{todo.title}</div>
                <div>{todo.status?"Done":"not Done"}</div>
                </div>
               
                )
        }
        </div>
        </div>
    )
}

export default Pagination