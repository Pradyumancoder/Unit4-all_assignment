import { useEffect, useState } from "react";
import AddCity from "./AddCity";
import { addCity, getCities, handleDeleteById } from "./api";

function Cities() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // order: DESC | ASC
  useEffect(() => {
    handleGetCity(page);
  }, [page]);

  function handleGetCity(page) {
    getCities({
      page: page,
      limit: 5,
      sort: "name",
      order: "DESC"
    })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddCity(data) {
    addCity(data).then((res) => {
      console.log(res);
      handleGetCity(page);
    });
  }
  function handleDelete(id) {
    handleDeleteById(id).then((res) => {
      handleGetCity(page);
    });
  }

  return (
    <div>
      <AddCity onAddCity={handleAddCity} />
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            padding: "1rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center"
          }}
        >
          <div>{item.name}</div>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button disabled>{page}</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>
  );
}

export default Cities;
