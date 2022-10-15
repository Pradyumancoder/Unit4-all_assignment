import RestaurantCard from "./RestaurantCard";

function getProduct() {
  return fetch(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
  ).then((res) => res.json());
}

function RestaurantTable({ AllData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {AllData?.map((item) => (
          <RestaurantCard
            id={item.id}
            name={item.name}
            rating={item.rating}
            type={item.type}
            votes={item.number_of_votes}
            start={item.price_starts_from}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
