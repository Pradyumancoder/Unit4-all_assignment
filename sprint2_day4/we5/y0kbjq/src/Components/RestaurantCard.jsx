import { DetailsComponent } from "./DetailsComponent";
import { Image } from "./Image";
import { OrderButton } from "./OrderButton";
import RatingComponent from "./Rating";
import styles from "./RestaurantCard.module.css";

function RestaurantCard({ data }) {
  const {
    name,
    id,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods,
    rating,
    votes,
    reviews,
    src
  } = data;
  console.log(payment_methods);
  return (
    <div>
      <div className={styles.container}>
        <div>
          <Image src={src} width="100px" height="120px" />
        </div>
        <div style={{ flex: 3 }}>
          <DetailsComponent
            priceForTwo={costForTwo}
            minPrice={minOrder}
            time={deliveryTime}
            title={name}
            cuisine={cuisine}
            cash={payment_methods.cash}
            card={payment_methods.card}
          />
        </div>
        <div>
          <RatingComponent rating={rating} votes={votes} reviews={reviews} />
        </div>
      </div>
      <div className={styles.footer}>
        <OrderButton />
      </div>
    </div>
  );
}

export default RestaurantCard;
