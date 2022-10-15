import { Link } from "react-router-dom";

export default function RestaurantCard({ id, name, rating, type, price }) {

  type = type.replace(/(^|_)(\w)/g, function ($0, $1, $2) {
    return ($1 && ' ') + $2.toUpperCase();
  });
  // console.log(type);

  
  return (
    <tr data-testid="item">
      <td>
       <Link to={`/restaurants/${id}`} data-testid="name">
          {name}
        </Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{type}</td>
      <td data-testid="price">{price}</td>
    </tr>
  );
}