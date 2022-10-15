import React, { createContext } from 'react'
import { useState } from 'react'


// here i am create context api

export const AuthContext=createContext()

// i have create updated components for update the settheme 


function AuthContextProvider({children}) {
    const [theme,settheme]=useState("dark")

    const toggletheme=()=>{
        settheme(theme=="dark" ? "light" : "dark")
    }
    
    console.log(theme)
  return (
<AuthContext.Provider value={{theme,toggletheme}} >
    <div>
      {children}
    </div>
    </AuthContext.Provider> 
  )
}

export default AuthContextProvider
