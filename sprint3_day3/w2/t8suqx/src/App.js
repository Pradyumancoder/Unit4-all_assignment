import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

export default function App() {
  return (
    <div className="App">
      {/* Links - are for moving a user from one route to another */}
      <Navbar />
      {/* Routes -> 
      describing what the UI should be for a particular path */}
      <AllRoutes />
    </div>
  );
}

// 1. Add BrowserRouter on top level ( index.js )
// 2. Create Routes
// 3. Create a navbar with links and elements
// 4. create files for Home, About, AllRoutes
