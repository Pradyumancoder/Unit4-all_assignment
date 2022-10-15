import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import UserPage from "./UserPage";
import Users from "./Users";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        path="/users/:user_id"
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
