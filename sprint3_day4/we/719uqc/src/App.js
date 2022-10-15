import { useContext } from "react";
import Button from "./Components/Button";
import CounterComponent from "./Components/CounterComponent";
import Github from "./Components/Github";
import { AppContext } from "./Context/AppContext";
import { AuthContext } from "./Context/AuthContext";
import "./styles.css";

export default function App() {
  const [theme, toggleTheme] = useContext(AppContext);
  const { state, handleLogin } = useContext(AuthContext);
  return (
    <div className="App">
      {/* {state.isAuth ? "Authenticated " + state.token : "Not authenticated"}
      <Button onClick={handleLogin}> LOGIN</Button> */}
      {/* <h1>Hello CodeSandbox</h1>
      <Button>Hello</Button>
      <br />
      <br />
      <Button onClick={() => toggleTheme()}>Toggle</Button> */}
      <Github />
      <CounterComponent />
    </div>
  );
}
