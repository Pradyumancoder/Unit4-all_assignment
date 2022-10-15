import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

const getData = (id) =>
  fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
  ).then((res) => {
    return res.json();
  });

function RestuarantPage() {
  const params = useParams().id;
  const [data, setdata] = useState({});

  useEffect(() => {
    getData(params)
      .then((res) => setdata(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  console.log(data);

  if (true) {
    return <Loader />;
  }
  return (
    <div data-testid="restaurant-container">
      <img
        src={data.image}
        alt={data.name}
        data-testid="restaurant-image"
        width={"100%"}
      />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{data.type}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestuarantPage;
