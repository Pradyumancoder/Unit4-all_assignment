import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const navigaite = () => {
  <Navigate to="/dashboard" />;
};
function AppContextProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(null);

  const loginUser = (form) => {
    console.log(form);

    let body1 = JSON.stringify(form);

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: body1,
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        // if (res.token !== undefined) {
        setAuth(true);
        setToken(res.token);
        navigaite();
        // }
      });
  };

  console.log(isAuth, token);

  const logoutUser = () => {
    setAuth(false);
    setToken(null);
  };

  return (
    <div>
      <AuthContext.Provider value={{ isAuth, token, loginUser, logoutUser }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AppContextProvider;
