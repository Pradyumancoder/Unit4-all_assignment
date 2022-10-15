import { useEffect, useState } from "react";
import RestaurantCard from "./Components/RestaurantCard";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [costForTwoOrder, setCostForTwoOrder] = useState("ASC");
  const [filterRating, setFilterRating] = useState(0);
  const [page, setPage] = useState(1);

  function getRestaurants({ filterRating, page, costForTwoOrder }) {
    setLoading(true);
    setError(false);
    return fetch(
      "https://stark-shore-90477.herokuapp.com/restaurants" +
        `?rating_gte=${filterRating}&_page=${page}&_limit=2&_sort=costForTwo&_order=${costForTwoOrder}` // greater than
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  useEffect(() => {
    getRestaurants({ filterRating, page, costForTwoOrder });
  }, [filterRating, page, costForTwoOrder]);

  return (
    <div className="App">
      {/* <RestaurantCard /> */}
      <div>
        <button onClick={() => setFilterRating(4)}>Greater than 4</button>
        <button onClick={() => setFilterRating(3)}>Greater than 3</button>
        <button onClick={() => setFilterRating(2)}>Greater than 2</button>
        <button onClick={() => setFilterRating(1)}>Greater than 1</button>
        <button onClick={() => setFilterRating(0)}>Show All</button>
      </div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      <div>
        <button
          disabled={costForTwoOrder === "ASC"}
          onClick={() => setCostForTwoOrder("ASC")}
        >
          COST FOR TWO ASC
        </button>
        <button
          disabled={costForTwoOrder === "DESC"}
          onClick={() => setCostForTwoOrder("DESC")}
        >
          COST FOR TWO DESC
        </button>
      </div>
      {data?.map((res) => (
        <RestaurantCard key={res.id} data={res} />
      ))}
    </div>
  );
}
