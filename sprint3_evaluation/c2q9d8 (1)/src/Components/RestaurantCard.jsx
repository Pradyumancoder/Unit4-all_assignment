import { Link } from "react-router-dom";

export default function RestaurantCard({ id, rating, type, name, price }) {
  return (
    <tr data-testid="item">
      <td>
        <Link to={`/RestaurantPage/${id}`} data-testid="name">
          {name}
        </Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{type}</td>
      <td data-testid="price">{price}</td>
    </tr>
  );
}
