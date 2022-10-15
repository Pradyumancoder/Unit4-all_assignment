import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  const [count,setcount]=useState(0)
function Prehandleclick(){
 setcount(count-1)
}
function nexthandleclick(){
  setcount(count+1)
}
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide data={data} count={count}/>
      <button disabled={count===0} onClick={Prehandleclick}data-testid="prev">Prev</button>
      <button disabled={count===data.length-1} onClick={nexthandleclick} data-testid="next">Next</button>
    </div>
  );
}
