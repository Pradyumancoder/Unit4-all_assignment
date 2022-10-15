import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, setstate] = useState({
    isAuth: false,
    token: null
  });
  const handleLogin = (token) => {
    setstate({
      ...state,
      isAuth: true,
      token: token
    });
  };
  const handleLogout = () => {
    setstate({
      ...state,
      isAuth: false,
      token: null
    });
  };
  return (
    <AuthContext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
