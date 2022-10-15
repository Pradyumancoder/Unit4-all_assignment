import React, { createContext, useReducer } from "react";

// dont change the name
export const AppContext = createContext();

// dont change the name
const initState = { isAuth: false, token: "" };
export const appReducer = (state,action) => {
  // write code
  switch(action.type){
    case "LOGIN_SUCCESS":return{
                         ...state,
                         isAuth:true,
                        token:action.payload
                         }
    case "LOGOUT_SUCCESS":return{
                          ...state,
                          isAuth:false,
                          token:""
                         }                     
    default:return state
  }
};

function AppContextProvider({children}) {
  // you need to use context
  const [state, dispatch] = useReducer(appReducer, initState);
  // fix code here
  return <AppContext.Provider
 value={{dispatch,state}}
  >{children}</AppContext.Provider>;
}

export default AppContextProvider;