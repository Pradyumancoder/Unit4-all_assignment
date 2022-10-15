import {useContext, useState} from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate,Link } from "react-router-dom";


function Login() {
   const [disable,setDisable]=useState(false)
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const {loginUser } = useContext(AppContext);
  // const [ disable ,setDisable ]=useState(false)
  const navigate = useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault();

    const payload ={
      email,
      password
    }
  setDisable(true)
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
      "Content-Type" : "application/json"
      },
      body:JSON.stringify(payload)
    }).then((res)=>{
      return res.json()
    }).then ((res)=>{
      console.log(res.token)
      loginUser(res.token);
       setDisable(false)
      navigate("/dashboard")
    })
  }

  return (
    <div className="login-page" >
      <form data-testid="login-form" className="form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
        <button disabled={disable} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div className="message" >
        <Link to="/">Go Back</Link>
      </div>
      </div>
  );
}
export default Login;