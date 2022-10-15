import {useContext} from "react"
import {AppContext} from "../Context/ContextProvider"

const getstyle=(theme)=>
theme === "dark"
?{
    color:"white",
    background:"black"
}
:{
    color:"black",
    background:"white"
}



function ToggleComponent(){
    const context =useContext(AppContext);
    console.log(context)
    const{toggleTheme , theme} = context;
    const style = getstyle(theme);
    return(
        <button style={style} onClick={toggleTheme}>Toggle</button>

    );
}
export default ToggleComponent;