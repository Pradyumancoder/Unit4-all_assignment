import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Center, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";

import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";

// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;


const Cart = () => {

const { cartData,TotalPrice,handleRemove ,placeOrder}=useContext(CartContext)



const { isOpen, onOpen, onClose } = useDisclosure()
const cancelRef = React.useRef()

const hanlePlaceOrder=()=>{
  placeOrder()
}

  return <>
<TableContainer>
  <Table variant='simple'>
    <TableCaption>No Exchange | No Return
</TableCaption>
    <Thead>
      <Tr>
        <Th>Product </Th>
        <Th>Price(INR</Th>
        <Th >Remove From chart</Th>
      </Tr>
    </Thead>
    { cartData?.map((item)=><Tbody key={item.id} >
      <Tr>
        <Td>{item.title}</Td>
        <Td isNumeric>{item.price}</Td>
        <Td><Button onClick={()=>handleRemove(item.id)} >Remove From cart</Button></Td>
      </Tr>
    </Tbody> )
      
    }
    <Tfoot>
      <Tr>
        <Th>Final Price</Th>
        <Th>{TotalPrice}</Th>
      </Tr>
    </Tfoot>
  </Table>
  <Center>

  <Button onClick={onOpen}>Place order</Button>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Place Order</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to Place Order
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button onClick={hanlePlaceOrder} colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>


  </Center>
</TableContainer>
  </>;
};

export default Cart;
