import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";
import { AppContext } from "../Context/AppContext";

function Dashboard() {
  const {handlelogout}=useContext(AppContext)
  const [data,setdata]=useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
  const [page,setPage]=useState(Number(searchParams.get("page"))||1);


 useEffect(()=>{
   fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}`)
   .then(res => res.json())
   .then((data)=>setdata(data))
  
 },[page])
 const changePage=(value)=>{
   setPage(value)
  
 }
 useEffect(()=>{
   setSearchParams({
     page
   })
 },[page])

  return (
    <div>
      <h3>Dashboard</h3>
      <h4 data-testid="token">TOKEN</h4>
      <button data-testid="logout-btn" onClick={handlelogout}>Logout</button>
      <ul data-testid="item-container">
        {data.map((el) => {
         return(
          <li key={el.id} data-testid="item">
          {el.title}
        </li>
         )

          
          
         
        })}
      </ul>
      <div data-testid="pagination-container">
        <Pagination changePage={changePage} total={50} current={page} />
      </div>
    </div>
  );
}

export default Dashboard;
