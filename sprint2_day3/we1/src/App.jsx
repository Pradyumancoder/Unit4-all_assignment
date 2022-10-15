import { useState } from 'react'
import './App.css'
import Pagination from "./Components/Pagination"
function App(){
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>pagination game beginning now</h1>
      <Pagination />
    </div>
  )
}

export default App
