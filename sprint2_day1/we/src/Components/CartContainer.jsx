import React, { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";


const initData=[
    {
        id:1,
        product_name:"Noodles",
        price:30,
        qty:1
    },
    {
        id:1,
        product_name:"Biryani",
        price:80,
        qty:2
    },
    {
        id:1,
        product_name:"Shoop",
        price:20,
        qty:3
    }
]

function caluculateTotal(products){
    // console.log(products)
 let x= products.reduce((acc,c)=>acc+ (c.qty * c.price),0)
 return x
}

function CartContainer() {
    const [data,setData]=useState(initData)
    const handleChangeQty =(id,amount)=>{
        let updatedData =data.map(item=>{
            if(item.id===id){
                return{
                    ...item,
                    qty:item.qty+amount
                }
            }
            else{
                return item
            }
        })
        setData(updatedData)
    }
  return (
    <div>
    

      {
        data.map(item=>
            <CartItem 
            key={item.id}
            id={item.id}
            label={item.product_name}
            qty={item.qty}
            price={item.price}
            handleChangeQty={handleChangeQty}
             />
            )
      }
     
     
      
      <Total total={caluculateTotal(data)}/>
    </div>
  );
}
export default CartContainer;
