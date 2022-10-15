
import { useContext } from 'react';
import './App.css';
import { AuthContext } from './Components/AuthContextProvider';

 const style={
  light: {
    color: "black",
    background: "#ffffff",
    padding: "50px"
  },
  dark: {
    color: "white",
    background: "black",
    padding: "50px"
  }
}

function App() {
 
  const {theme,toggletheme}=useContext(AuthContext)
  console.log(theme)
  return (
    <div className="App" style={theme=="dark" ? style.dark : style.light}>
    <h1> the theme is {theme}</h1>
   <button onClick={toggletheme}>change theme</button>
    </div>
 
  );
}

export default App;
