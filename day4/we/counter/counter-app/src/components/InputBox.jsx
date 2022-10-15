import { useState } from "react"

function InputBox(){

const [text,settext]=useState("")

const handleclick=(e)=>{
    settext("")
}
const handleonchage=(e)=>{
settext(e.target.value)
}


    return(
     <div>
        <input value={text} onChange={handleonchage} type="text" />
        <button onClick={handleclick}>clear</button>
        <h2>
            TEXT:{text}
        </h2>
     </div>
    )
}
export default InputBox