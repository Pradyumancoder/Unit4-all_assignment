import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function PrivateRoute({children}) {
  // fix code here
  const {state}=useContext(AppContext)
 
  if(!state.isAuth){
    return <Navigate to="/login"/>
  }else{
  return children
  }
}

export default PrivateRoute;
