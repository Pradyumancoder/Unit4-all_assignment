import {useEffect,useContext, useState } from "react";
import RestaurantTable from "../Components/RestaurantTable";
import { AppContext } from "../Context/AppContext";
import Pagination from "../Components/Pagination";

function Dashboard() {

  const { handlelogout,token } = useContext(AppContext);
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)
  
  useEffect(() => {
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=5`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [page]);
  const changePage = (value) => {
    setPage(value);
  };
  // useEffect(() => {
  //   setSearchParams({
  //     page
  //   });
  // }, [page]);

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn"  onClick={handlelogout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data}/>
      </div>
      <div data-testid="pagination-container">
      <Pagination changePage={changePage} total={50} current={page} setPage={setPage}/>

      </div>
    </div>
  );
}

export default Dashboard;
