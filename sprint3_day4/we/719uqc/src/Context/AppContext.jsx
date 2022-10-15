import React, { useState } from "react";

export const AppContext = React.createContext();

// Theme
// Auth

// Step 1: Create context
// Step 2: consuming the context with useContext
// Step 3: Create Provider and provide required value throughout your application
// Create, Consume, Provide
// CCP

// 1. What does Context API?
// Prop drilling
// It is not a state management API. ITS NOT STATE MANAGEMENT

// Auth
const initState = {
  theme: "dark",
  auth: false
};

export default function AppContextProviderComponent({ children }) {
  const [state, setState] = useState("dark");
  const [auth, setAuth] = useState(false);

  const toggleState = () => {
    setState(state === "dark" ? "light" : "dark");
  };
  // console.log(children);
  return (
    // <AppContext.Provider value="dark">
    <AppContext.Provider value={[state, toggleState]}>
      {children}
    </AppContext.Provider>
  );
}

// useReducer
//
// complex state management
// when component becomes larger and larger
// useReducer
// State management API
// similar to useState
// it can hold initial value
// [ state, dispatch ] = useReducer(  )
// useReducer( reducer, initalState )
// reducer( state, action )
// state is the current state of your datastore
// action is an object { type: "action", payload }
// const handeLogin = () => {
//   //
//   setAuth(true);
// };
// const handelLogout = () => {
//   setAuth(false);
//   //
// };
