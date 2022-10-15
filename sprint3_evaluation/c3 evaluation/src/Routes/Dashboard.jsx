import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AppContext } from "../Context/AppContext";

function Dashboard() {
  const {logoutUser,token} = useContext(AppContext);
  console.log(token);
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(false)
  const [totalPages,setTotalPages] = useState()
  const [searchParems , setSearchParams]=useSearchParams()
  
  const [filterData, setFilterData] = useState("")

  const getData=({page=1 , filterData=""})=>{
    return fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?filter=${filterData}&page=${page}&limit=10`,{
      filterData
    })
    .then((res)=>{
    return res.json()
    })
  }

  useEffect(()=>{
    setLoading(true)
    getData({page , filterData})
    .then((res)=>{
    //  console.log(res.data)
     setData(res.data)
     setTotalPages(res.totalPages)
    setLoading(false)
    })

  },[page ,filterData])

  const handlePageChange=(page)=>{
    setPage(page)
  }
 const handleLogout=()=>{
  logoutUser()
 }
//  console.log(filterData);
  useEffect(()=>{
let paramsObj={ page }
if(filterData)
{
  paramsObj.filterData=filterData
}
setSearchParams(paramsObj)
  },[ filterData ])
  
return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handleLogout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div>
        <select onChange={(e)=>setFilterData(e.target.value)} data-testid="filter-box">
          <option value="">All</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="fast_food">Fast Food</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining  */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          loading?<Loader/>:
      <RestaurantTable data={data} />
        }
      </div>
      <br/>
      <div data-testid="pagination-container">
      <Pagination  totalPages={totalPages} currentPage={page}
        handlePageChange={handlePageChange}
      />
      </div>
      
    </div>
  );
}

export default Dashboard;
