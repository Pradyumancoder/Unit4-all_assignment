import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AppContext";

function getProduct() {
  return fetch(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
  ).then((res) => res.json());
}

function Dashboard() {
  const [page, setpage] = useState(1);

  const [totalpage, settotalpages] = useState();

  const [data, setdata] = useState([]);

  const [loading, setLoading] = useState(false);
  const { isAuth, token, loginUser, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getProduct(page)
      .then(
        (res) => (
          console.log(res), setdata(res.data), settotalpages(res.totalPages)
        )
      )
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handlePage = (e) => {
    setpage(Number(e.target.innerText));
  };

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box">
          <option value="">All</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? <Loader /> : <RestaurantTable AllData={data} />}
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div data-testid="pagination-container">
        {
          <Pagination
            totalPages={totalpage}
            currentPage={page}
            handlePageChange={handlePage}
          />
        }
      </div>
    </div>
  );
}

export default Dashboard;
