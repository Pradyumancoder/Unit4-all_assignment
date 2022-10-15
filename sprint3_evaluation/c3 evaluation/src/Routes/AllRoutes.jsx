import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard  from "./Dashboard";
import RestaurantPage from "./RestaurantPage"
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
    <Route path="/restaurants/:id" element={<PrivateRoute><RestaurantPage /></PrivateRoute>}/>
    </Routes>
    </div>
    
  );
}

export default AllRoutes;