import React from "react";
import { useState } from "react";
const initFormData={
    name:"",
    email:"",
    gender:"male",
    developer:"fronted-developere",
    status:"true"

}
    
function FormData(){
    const[formData,setFormData]=useState(initFormData);

    const handlechange=(e)=>{

        const{value,name,checked,type}=e.target;
        
const valueToupdate= type==="checkbox"? checked:value;

console.log(`update ${name} with ${valueToupdate}`);

        setFormData({
            ...formData,
         [name]:valueToupdate
        })
    }
    return(
<form>
    <div>
        <input 
        name="name"
        onChange={handlechange}
        placeholder="name"
        type="text" 
        value={formData.name}

        />
    </div>
    <div>
    <input 
        name="email"
        onChange={handlechange}
        placeholder="email"
        type="text" 
        value={formData.email}
        />
    </div>
    <div>
        <select onChange={handlechange}  
        name="gender"
        defaultValue={formData.gender}
        value={formData.gender}
        
        >
            <option key="select" value="selct">Gender</option>
            <option key="male" value="male">male</option>
            <option key="female" value="female">female</option>
            
        </select>
        
    </div>
    <div>
        
        <select onChange={handlechange}
        name="developer"
        value={formData.developer}
        >
            <option key="select-role" value="selct">select-role:-</option>
            <option  key="fronted-developer" value="fronted-developere">fronted-developer</option>
            <option  key="backend-developer" value="backend-developer">backend-developer</option>
           <option key="machine-devoloper" value="machine-developer">machine-developer</option>
        </select>
    </div>
    <div>
        <h3>marital status </h3>
        <div>
        <h4>married <input
        name="status"
        onChange={handlechange} 
         checked={formData.status} 
         type="checkbox"  />   

         
        un-married <input
        name="status"
        onChange={handlechange}
        checked={formData.checked} 
        type="checkbox"   /></h4>
        </div>
       
      
    </div>
    <ul>
        <li style={{color:"blue",fontSize:"2rem",background:"pink"}}>
            Name:{formData.name}
                
        </li>
        <li  style={{color:"blue",fontSize:"2rem",background:"yellow"}}>
            Email:{formData.email}
        </li>

        <li  style={{color:"blue",fontSize:"2rem",background:"grey"}}>
            Gender:{formData.gender }
        </li>

        <li  style={{color:"red",fontSize:"2rem",background:"pink"}}>
            Developer:{formData.developer }
        </li>
    </ul>
</form>
    );
}
export default FormData