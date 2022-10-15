import React, { useState } from "react";

// STEP 1:
export const AuthContext = React.createContext();
const initState = {
  isAuth: false,
  token: null
};

// STEP 3:
export default function AuthContextProviderComponent({ children }) {
  const [state, setState] = useState(initState);

  const handleLogin = () => {
    setState({
      ...initState,
      isAuth: true,
      token: "ABCD"
    });
  };

  return (
    // object
    <AuthContext.Provider value={{ state, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

// CCP
