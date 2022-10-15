function createArrayOfSize(n) {
  return new Array(n).fill(0).map;
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
  let pages = new Array(totalPages).map((a, i) => (
    <button
      onClick={() => handlePageChange(i + 1)}
      disabled={currentPage === i + 1}
      data-testid="page-btn"
    >
      {i + 1}
    </button>
  ));
  return <div>{pages}</div>;
}

export default Pagination;
