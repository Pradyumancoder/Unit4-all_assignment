import React, { createContext, useReducer ,useState} from "react";

// dont change the name
export const AppContext =createContext();

// export const appReducer=(state,action)=>{
//   switch(action,type){
//     case"Login_success":return{
//       ...state,
//       isAUth:true,
//       token:action,paylaod
//     }
//   }
// }

// dont change the name
export const appReducer = () => {
  // write code
};

function AppContextProvider({children}) {
  const [state,setState]=useState({
    isAuth:true,
    token:null

  })
  const handleLogin=(token)=>{
    setState({
      ...state,
      isAuth:true,
      token:token
    })
  }
  const handlelogout=()=>{
    setState({
      ...state,
      isAuth:false,
      token:null
    })
  };

  // you need to use context
  // fix code here
  return <AppContext.Provider value={{state,handleLogin,handlelogout}}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
