import { useContext, useState } from "react";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import { AppContext } from "../Context/AppContext";

function Login() { 
 
  const navigate=useNavigate()
  const {dispatch}=useContext(AppContext)
  const [form,setForm]=useState({email:"eve.holt@reqres.in",password:"cityslicka"});
const handleChange=(e)=>{
const {name,value}=e.target;
setForm({...form,[name]:value})
}
const handleSubmit=(e)=>{
e.preventDefault();
fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((res) => {
        
        dispatch({type:"LOGIN_SUCCESS",payload:res.token})
        // auth.handleLogin(res.token);
         navigate("/dashboard");
      })
      .catch((err) => {});
}

  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" name="email" onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
