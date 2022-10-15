// import Dashboard from './Dashboard';
// import Login from './Login';
// import Home from './Home'
// import {Routes,Route} from "react-router-dom"

// function AllRoutes() {
 
//   return (
//     <div>
//        <Home/>
//       <Routes>
//    <Route path="/dashboard" element={<Dashboard/>} />
//    <Route path="/login" element={<Login/>} />
//       </Routes>
  
//     </div>
//   );
// }

// export default AllRoutes;

import { Routes,Route } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import SingleRestaurantPage from "./SingleRestaurantPage";

function AllRoutes() {
  return (
    <div>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Dashboard"  element={<Dashboard />} />
  <Route path="/restaurants"  element={<PrivateRoute> <SingleRestaurantPage /> </PrivateRoute>} />
</Routes>
    </div>
  );
}
export default AllRoutes;
