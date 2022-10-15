import {Button, Center, FormControl, FormHelperText, FormLabel, Input, Spinner } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

// 0. axios should be used for making network requests;

// 1. input boxes which takes email and password from the user

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [ logClick , setLogClick ]=useState(true)
  const {loginUser } = useContext(AuthContext);
  
  const navigate = useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault();

    const payload ={
      email,
      password
    }
    setLogClick(false)
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
      "Content-Type" : "application/json"
      },
      body:JSON.stringify(payload)
    }).then((res)=>{
      return res.json()
    }).then ((res)=>{
      setLogClick(true)
      console.log(res.token)
      loginUser(res.token);
      // setDisableBtn(false)
      navigate("/home")
    })
  }




  return (

    <FormControl maxW="sm" borderRadius={10} m="auto" mt="10" border="1px solid" borderColor="gray.300" p="5">
  <FormLabel>Email address</FormLabel>
  <Input type='email' value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>password</FormLabel>
  <Input type='password' value={password}
              onChange={(e)=>setPassword(e.target.value)} />
<Center mt="10">
<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
  onClick={handleSubmit}
>
{
  logClick?"LOGIN":<Spinner />
}
</Button>
</Center>
</FormControl>
  )
};

export default Login;
