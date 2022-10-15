import { Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";

// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return (<Flex>
    <Routes>
      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>  } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/cart" element={ <PrivateRoute><Cart /></PrivateRoute> } />
    </Routes>
  </Flex>);
};

export default AllRoutes;