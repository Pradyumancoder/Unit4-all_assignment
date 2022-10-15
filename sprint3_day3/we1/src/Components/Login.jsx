import { useContext, useState } from "react";
import { AuthContext } from "../Context/Authcontext";
export const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const auth = useContext(AuthContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        console.log(res);
        auth.handleLogin(res.token);
      })
      .catch((err) => {
        alert("invaild");
        auth.handleLogout();
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={formState.email}
            onChange={handleChange}
            placeholder="email"
            name="email"
          />
        </div>
        <div>
          <input
            value={formState.password}
            onChange={handleChange}
            placeholder="password"
            name="password"
            type="password"
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
