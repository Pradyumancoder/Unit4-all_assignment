import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AppContext";

function PrivateRoute(props) {
  const { isAuth, token, loginUser, logoutUser } = useContext(AuthContext);
  console.log(isAuth);

  if (isAuth === false) {
    return <Navigate to="/" />;
  }

  return props.children;
}
export default PrivateRoute;
