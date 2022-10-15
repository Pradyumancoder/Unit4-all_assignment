import { useState } from "react";

function AddCity({ onAddCity }) {
  const [formState, setFormState] = useState({
    name: "",
    population: "",
    country: "India"
  });

  function handleChange(e) {
    const { name, value, type } = e.target;
    const val = type === "number" ? Number(value) : value;
    setFormState({
      ...formState,
      [name]: val
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddCity(formState);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            value={formState.name}
            type="text"
            name="name"
            placeholder="name"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            value={formState.population}
            type="number"
            name="population"
            placeholder="population"
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default AddCity;
