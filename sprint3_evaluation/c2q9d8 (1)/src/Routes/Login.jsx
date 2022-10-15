import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AppContext";

let initial = {
  email: "",
  password: ""
};

function Login() {
  const [form, setform] = useState(initial);
  // const [text, setText] = useState("");

  const { isAuth, loginUser } = useContext(AuthContext);

  console.log(isAuth);

  if (isAuth === true) {
    return <Navigate to="/dashboard" />;
  }

  const handleLogin = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
    console.log(form);
  };

  const SubmitData = (e) => {
    e.preventDefault();
    loginUser(form);
  };

  return (
    <div className="login-page">
      <form onSubmit={SubmitData} className="form" data-testid="login-form">
        <div>
          <label>
            <input
              onChange={handleLogin}
              data-testid="email-input"
              type="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              onChange={handleLogin}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
