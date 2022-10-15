import { useRef } from "react";
import { useEffect } from "react";
function Focus(){

    
    const ref=useRef(null);
    useEffect(()=>{
        
        console.log(ref);
        handlefocus()
    },[])
    const handlefocus=()=>{
        ref.current.focus()
    }
    return(
        <div>

            <input ref={ref} type="text " placeholder="text anything in this box" />
            <button onClick={handlefocus}>Focus</button>
        </div>
    )
}
export default Focus