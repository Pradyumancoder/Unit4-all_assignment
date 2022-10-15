import { useState } from "react";

function AddItem({handleadd,data}) {
  const [text,settext]=useState("")
 

  const handleonchange=(e)=>{
      settext(e.target.value)
  }
 
  return (
    <div>
      <input value={text} onChange={handleonchange} data-testid="input" placeholder="add something" />
      <button disabled={data.length>4} onClick={()=>handleadd(text)} data-testid="add-btn">ADD</button>

    </div>
  );
}

export default AddItem;
