import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Timerclinup from './Components/Timerclinup'

export default function App() {
  const [show, setshow] = useState(true)


  return (
    <div className="App">
      {show && <Timerclinup/>}
      <button style={{color:"red"}} onClick={()=>setshow(!show)}>TOGGLE</button>
    </div>
  )
}

