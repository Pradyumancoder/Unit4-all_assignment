function RatingComponent({ rating, votes, reviews }) {
  return (
    <div>
      <div>{rating}</div>
      <div>{votes} votes </div>
      <div>{reviews} reviews </div>
    </div>
  );
}

export default RatingComponent;
