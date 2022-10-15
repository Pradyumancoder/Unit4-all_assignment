import { useState } from "react"

export default function InputUpdater(){

    const [text,settext]=useState("")
    const [todos,settodos]=useState([])


const handleonchange=(e)=>{
    settext(e.target.value)
}
const handleclear=()=>{
    settext("");
};
const handleclick=()=>{
        settodos([...todos,text])
        handleclear()
}
console.log(todos);
    return(
     <div>
        
        <input value={text} onChange={handleonchange} type="text" />
        <button  onClick={handleclick}>Add</button>
        <h2>{text}</h2>

        <ul>
        {todos.map((todo) => (
          <li> {todo} </li>
        ))}
      </ul>
      
        
     </div>
    );
}