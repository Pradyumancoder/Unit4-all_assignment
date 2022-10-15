import React from 'react'
import { useState } from 'react'
import AddItem from './AddItem'
import Addtodo from './Addtodo'



function Todo() {
  const [todos,settodos]=useState([])

 const handleclick=(text)=>{
  const newtodo={
      title:text,
      status:false,
      id:new Date().toDateString() + text
  }
  const todoafternewitemadded=[...todos,newtodo]
    settodos(todoafternewitemadded)
 }


const handletoggle=(id)=>{
    const todoafterupdation=todos.map((todo)=>(
      (todo.id===id ? {...todo,status: !todo.status}:todo)
    ))
    settodos(todoafterupdation);
};


 const handledelete=(id)=>{
  const todoafterdeletion=todos.filter((todo)=>todo.id !==id);
  settodos(todoafterdeletion)
}
  return (
    <div>
     
<Addtodo handleclick={handleclick}/>
      <ul>
  {
    
    todos.map((items)=>(
      <AddItem
       id={items.id}
       title={items.title}
       status={items.status} 
       handledelete={handledelete}
       handletoggle={handletoggle}
       
       />
      ))
    }
   
  </ul>

    </div>


  )
}

export default Todo
