import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

function Countries() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("asc");
  const [totalPages, setTotalPages] = useState(20);
  const fetchCountries = async () => {
    setLoading(true);
    const res = await fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10&orderBy=${orderBy}`
    );
    const data = await res.json();
    console.log(data);
    setPost(data.data);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, [page, orderBy]);
  if (loading) return <LoadingIndicator />;
  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {post &&
          post.map((elem) => (
            <CountriesCard
              country={elem.country}
              key={elem.id}
              population={elem.population}
            />
          ))}
      </div>
      <div>
        <Pagination
          current={page}
          onChange={(value) => setPage(value)}
          total={totalPages}
        />
      </div>
    </div>
  );
}

export default Countries;
