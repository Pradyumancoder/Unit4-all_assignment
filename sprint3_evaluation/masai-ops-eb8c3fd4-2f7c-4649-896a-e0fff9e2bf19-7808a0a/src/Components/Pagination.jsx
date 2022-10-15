function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({setPage,current}) {
  let perPage = Array(10)
  .fill()
  .map((el, i) => i + 1);
  let pages = createArrayOfSize(10).map((a) => {
    <button data-testid="page-btn">a</button>
  });
  
  return <div>{
    perPage.map((el)=><button data-testid="page-btn" value={el}
    disabled={current==el}
    onClick={(e) => setPage(e.target.value)}>{el}</button>)
    }</div>;
}

export default Pagination;
