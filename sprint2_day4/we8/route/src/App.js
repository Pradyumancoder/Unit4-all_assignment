import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import AllRouter from './Pages/AllRouter';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <AllRouter/>
    
    </div>
  );
}

export default App;
