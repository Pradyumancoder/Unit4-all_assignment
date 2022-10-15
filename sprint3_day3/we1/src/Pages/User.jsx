import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const User = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [text, setText] = useState(searchParams.get("q") || "");

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [page]);

  useEffect(() =>
    setSearchParams(
      {
        page,
        q: text
      }[(page, text)]
    )
  );

  return (
    <div>
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </div>
      <button disabled={page === 1} onClick={() => setPage(1)}>
        1
      </button>
      <button disabled={page === 2} onClick={() => setPage(2)}>
        2
      </button>
      {data.map((data) => (
        <div key={data.id}>
          <h3>{data.first_name}</h3>
          <img src={data.avatar} alt="" />
        </div>
      ))}
    </div>
  );
};
