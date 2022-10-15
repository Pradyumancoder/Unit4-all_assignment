import { Route, Routes } from "react-router-dom";
import { About } from "../Pages/About";
// import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { User } from "../Pages/User";
import { Login } from "./Login";
import { Private } from "./Private";

export const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={
            <Private>
             
            </Private>
          }
        />
        <Route
          path="/user"
          element={
            <Private>
              <User />
            </Private>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
