import Button from "./Button";

function Pagination({ onChange, total, current }) {
  let pages = new Array(total).fill(0).map((item, index) => (
    <Button disabled={current===index+1} onClick={() => onChange(index + 1)} key={`page-${index + 1}`}>
      {index + 1}
    </Button>
  ));

  return total !== 0 && pages;
}
export default Pagination;
