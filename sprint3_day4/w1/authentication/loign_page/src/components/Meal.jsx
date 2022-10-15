import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Meal() {
    const [data,setdata]=useState([])
    const [pagination,setpagination]=useState(1)
    const [sort, setSort] =useState(false)
  useEffect(()=>{
    axios(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
  .then((res)=>{
   
    setdata(res.data.meals)
  })
  .catch((err)=>{
    console.log(err)
  })
  },[])

  const handlenext=()=>{
      setpagination(pagination+1)
  }
  const handleprev=()=>{
    setpagination(pagination-1)
  }
  const handleSort = () => {
    setSort(!sort);
  };
  return (
    <>
    <div >
    <button onClick={handleSort}>{sort ? "ASC" : "DESC"}</button>
  </div>
    <div>
    
      {
        sort?data.sort((a,b)=>a.strCategory<b.strCategory).map((el)=>(
         <div key={el.meals}>{el.strCategory}</div>
        )):data.map((el)=>(
          <div key={el.meals}>{el.strCategory}</div>
         ))
      }
      <button onClick={handlenext}>Next</button>
      <button>{pagination}</button>
      <button onClick={handleprev}>Prev</button>
    </div>
    </>
  )
}

export default Meal
