import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {

  const { isAuth ,token }=useContext(AuthContext)

  return (<>

<Flex bg='blue.100'  minWidth="max-content" alignItems="center" boxShadow="md" gap="2">
  <Box  p="5">
    <Heading size="md" >{!isAuth?"":`Token :${token}`}</Heading>
  </Box>
  <Spacer />
  <HStack fontSize={18} fontWeight={500} mr="10">
  <Link to={"/home"} >HOME</Link>
  <Link to={"/login"} >LOGIN</Link>
  <Link to={"/cart"} >CART</Link>
  </HStack>
</Flex>

  </>);
};

export default Navbar;
