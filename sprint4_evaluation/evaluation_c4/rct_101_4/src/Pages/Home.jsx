import { Alert, AlertDescription, AlertIcon, Box, Button, Center, Container, FormControl, Grid, GridItem, Image, Text} from "@chakra-ui/react";
// import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";



// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

export const getProductData=()=>{
  return axios.get(`https://jabz-101-app.herokuapp.com/products `)
}

const Home = () => {

  const [ productData , setProductData ]=useState([])
  const [ isError , setIsError ]=useState(false)
// const [ isDisable , setisDisabled ]=useState(false)

  
  useEffect(()=>{
    
    getProductData().then((res)=>{
      console.log(res.data);
      setProductData(res.data)
    }).catch((err)=>{
      setIsError(true)
    })
    
  },[])
  
  // let btnRef = useRef();

  // const onBtnClick = () => {
  //   if (btnRef.current) {
  //     btnRef.current(isDisabled);
  //     console.log(btnRef.current ,"done");
  //   }
  // };
 

  const { handleCart} = useContext(CartContext)

 

  const handleAddToCart = (item)=>{
    handleCart(item)
  }


  return (<Container maxW={{ base:"full" , md:"container.xl" }}  p={{base:2,lg:0}}>
    {
      isError?<Alert textAlign='center' status='error'>
      <AlertIcon />
      <AlertDescription>Something went wrong. please refresh.</AlertDescription>
    </Alert>:
    <Grid w="full" templateColumns={{base:"repeat(1,1fr)" , md:"repeat(2,1fr)", lg:"repeat(3,1fr)"
    
    }}  gap={4}>
      {
productData?.map((item)=><GridItem mt="10" p={5} borderRadius="10" boxShadow="md" key={item.id} >
<Box  columns={{sm:2 , md:3}}
spacing="8"
p={2}
textAlign="center"
>
<Image boxSize="xs" src={item.image} alt={item.title} />
</Box>
<Text textAlign="center" fontSize='md'>{item.title}</Text>
<Text textAlign="center" fontSize='md'>INR :{item.price}</Text>
<FormControl>
  <Center>
<Button  
 onClick={()=>handleAddToCart(item)
 } >
   Add to cart
  </Button>
  </Center>
</FormControl>
  </GridItem>
  )
      }
    </Grid>
      
    }
  </Container>);
};

export default Home;

// "id": 1,
// "title": " 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating": {
//   "rate": 3.9,
//   "count": 120
