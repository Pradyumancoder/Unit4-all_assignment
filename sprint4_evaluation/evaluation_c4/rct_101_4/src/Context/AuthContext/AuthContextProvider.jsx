import React, { createContext, useState } from "react";

// 1. create auth context and auth context provider for the entire application to have auth related data;

// 2. maintain loading,error, auth status and token in the state; it goes without saying; you are expected to use useReducer as state management tool; (hint : different actions that you are expected to have can be login - loading, success, failure ..)

// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;

export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {


  const [isAuth,setIsAuth] = useState(false)
  const [token,setToken] = useState(null)


  const loginUser = (token) =>{
      setIsAuth(true) 
      setToken(token)
      console.log(token);
  }

  const logoutUser = ()=>{
      setIsAuth(false) 
      setToken(null)
  }


  return <>
  <AuthContext.Provider value ={{isAuth,loginUser,logoutUser,token}}  >{children}</AuthContext.Provider>
  </>;
};

export default AuthContextProvider;