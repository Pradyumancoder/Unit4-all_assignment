function Slide({data,count}) {
  let info=data[count]
  return (
    <div className="slide-container" data-testid="slide">
      <h3 data-testid="title">{info.title}</h3>
      <p data-testid="description">{info.description}</p>
    </div>
  );
}

export default Slide;
