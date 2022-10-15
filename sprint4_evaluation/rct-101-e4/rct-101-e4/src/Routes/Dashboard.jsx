
import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

function Dashboard() {
const [data,setData]=useState([])
useEffect(()=>{
axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
.then((res)=>{
    setData(res.data)
})
.catch((err)=>{
    console.log(err)
})
})
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
