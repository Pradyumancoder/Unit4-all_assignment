import React  from "react";
function Button({
    onClick,
    children, 
    disabled
})
{
    return(
        <button style={{
            padding:"1rem",
            border:0,
            borderWidth:0,
            backgroundColor:"tomato",
            fontSize:"White"
        }}disabled={disabled}onClick={onClick}>{children}
        </button>
    )
}
// console.log(disabled)
export default Button