import { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
const maxLength = 5;

function List() {
  const [update,setupdate]=useState([])
  const handleadd=(value)=>{
    let obj={title:value,status:'NOT DONE'}
  
    setupdate([...update,obj])
  }
  console.log(update)
  return (
    <div>
      <AddItem
      handleadd={handleadd}
      data={update}
      />
      <ListItem  data={update}/>
    </div>
  );
}

export default List;
