function AddItem({id,title,status,handledelete,handletoggle}){

    


    return(
      <div>
        <li>{title}-{status ? "Completed" : "Not Completed"}</li>
        <button onClick={()=>handletoggle(id)}>toggle</button>
        <button onClick={()=>handledelete(id)}>Delete</button>
  
      </div>
    )
  }
  export default AddItem;