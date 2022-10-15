import styles from "./RestaurantCard.module.css";

export const DetailsComponent = ({
  title,
  time,
  minPrice,
  cuisine,
  priceForTwo,
  cash = false,
  upi = false,
  card = false
}) => {
  return (
    <div className={styles.detailsContainer}>
      <h3>{title}</h3>
      <div>{cuisine.join(", ")}</div>
      <div>Cost ₹ {priceForTwo} for two </div>
      <div>
        Min ₹ {minPrice} • Up to {time} min
      </div>
      <div>
        Accepts {cash && "Cash"} {upi && "UPI"} {card && "Card"} payments
      </div>
    </div>
  );
};
