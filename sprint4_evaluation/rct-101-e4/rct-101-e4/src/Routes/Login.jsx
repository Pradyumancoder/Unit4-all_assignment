import React, { useContext, useState } from 'react'
import {Button, Input } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import axios from 'axios'

function Login() {

    // const [formData, setFormData] = useState({
    //     email: "",
    //     password: ""
    //   });

    //   function handleChangeData(e) {
    //     const { name, value } = e.target;
    //     const val = value;
    //     setFormData({
    //       ...formData,
    //       [name]: val
    //     });
    //   }


      const navigate=useNavigate()

      const dispatch=useContext(AppContext)

      const [form,setForm]=useState({email:"eve.holt@reqres.in",password:"cityslicka"});
      
      const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({...form,[name]:value})
        }

    const handleSubmit=(e)=>{
e.preventDefault()
return axios.post("https://reqres.in/api/login").then((res)=>{
    dispatch({type:"LOGIN_SUCCESS" , payload:res.token})
    navigate("/dashboard")
   
}).catch((err)=>{
dispatch({type:"LOGIN_FAILURE"})
console.log("errr");

})
    }

  return (
    <div>
        <form  onSubmit={handleSubmit}>
      <Input type="email" placeholder='Email'  name="email"
          onChange={handleChange}  />
          
      <Input type="text" placeholder='password'  name="password"
          onChange={handleChange}  />
      <Button  colorScheme='blue' value="Submit">Submit</Button>
      </form>
    </div>
  )
}

export default Login
