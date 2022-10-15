import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import {Navigate} from "react-router-dom"

function PrivateRoute({children}) {
  // fix code here
const {state}=useContext(AppContext)
console.log(state)
if(!state.isAuth){
  return<Navigate to="/login"/>;
}
  return children;
}

export default PrivateRoute;
