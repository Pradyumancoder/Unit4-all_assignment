import React, { useEffect, useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [isAsc, setIsAsc] = useState(false);
  const [isLoading, setsIsLoading] = useState(false)

  const getdata = async () => {
    try{
    let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`)
    let d = await res.json();
  
    if (isAsc) {

      let dd = d.data.sort((a, b) => a.salary - b.salary)

      setData(dd)
      setsIsLoading(true)
      console.log(data)

    } else {
      let dd = d.data.sort((a, b) => b.salary - a.salary)
      
      setData(dd)
      setsIsLoading(true)
      console.log(data)

    }
  }catch{
    console.log("error")
  }
    
  }


  useEffect(() => {
    setTimeout(() => {
      getdata()
    }, 1500)
  }, [isAsc])

  return (
    <div className="App">
      <Dashboard isAsc={isAsc} setIsAsc={setIsAsc} isLoading={isLoading} data={data} />
    </div>
  );
}
