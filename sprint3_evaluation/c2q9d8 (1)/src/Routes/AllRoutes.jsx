import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import RestuarantPage from "./RestaurantPage";

function AllRoutes() {
  return (
    <div>
      {/* Add Home, Login dashboard and restaurant pages */}
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/RestaurantPage/:id"
            element={
              <PrivateRoute>
                <RestuarantPage />
              </PrivateRoute>
            }
          />
        </Routes>
      }
    </div>
  );
}

export default AllRoutes;
