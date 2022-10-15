import './App.css';
import { useContext } from 'react'; 

import {AppContext} from "./Context/ContextProvider"
import ToggleComponent from './Components/ToggleComponent';



function App() {
  const value =useContext(AppContext);
  console.log(value)
  return (
    <div className="App">
     
      <h1>Theme</h1>
      <h2>{value.theme}</h2>
      <ToggleComponent/>
     
     
    </div>
  );
}

export default App;
