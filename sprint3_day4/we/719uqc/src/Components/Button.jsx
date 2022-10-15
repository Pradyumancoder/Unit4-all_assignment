import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const styles = {
  dark: {
    color: "white",
    background: "black"
  },
  light: {
    background: "white",
    color: "black"
  }
};
// Button is UI component

// Step 2: consuming the context with useContext
function Button({ children, onClick }) {
  const [theme] = useContext(AppContext);
  return (
    <button style={styles[theme]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
