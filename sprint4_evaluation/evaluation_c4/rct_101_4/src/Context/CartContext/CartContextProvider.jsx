import { useToast } from "@chakra-ui/react";

import React, { createContext, useEffect, useState } from "react";

// 1. create cart context and cart context provider for the entire application to have cart related data;

// 2. maintain cart data in the state; it goes without saying; you are expected to use useReducer as state management tool; ( Hint : different actions you are expected to have are adding item to cart, removing item from cart, and checkout ..)

// 3. send both state and dispatch values so that entire application has access to the state and dispatch function;

export const CartContext = createContext()




const CartContextProvider = ({children}) => {

  const toast = useToast() 
  const [cartData, setCartData] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);

  const handleCart = (data) => {
    if (cartData.indexOf(data) !== -1) {
      toast({
        title: 'Already Exist in Cart.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    
      return;
    }

    toast({
      title: 'SuccessFully Added To Cart.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    setCartData([...cartData, data]);
    //  console.log(cartData.indexOf(data));
  };

  const handlePrice = () => {
    let endprice = 0;

    cartData.map((el) => {
      endprice += el.price;
    });

    setTotalPrice(endprice);
    console.log(endprice);
  };

  
  const handleRemove = (id) => {
    const arr = cartData.filter((item) => item.id !== id);
    setCartData(arr);
    handlePrice();
  };

  const placeOrder=()=>{
    setCartData([])
  }

  useEffect(() => {
    handlePrice();
  });



  return <CartContext.Provider value={{cartData,TotalPrice, handleCart,handleRemove ,placeOrder}} >
         {children}
  </CartContext.Provider>
};

export default CartContextProvider;