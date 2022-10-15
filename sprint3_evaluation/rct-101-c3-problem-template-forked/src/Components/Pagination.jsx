function Pagination({ 
  // total pages 
  total, 
  // current page of the component
  current, 
  // event handler when button is clicked, 
  // changePage accepts the new page in number
  changePage }) {
    
    let perPage=Array(10).fill().map((el,i)=>i+1)

  // fix code here
  let pages = <button
      data-testid="page-btn"
      onClick={()=>{}}
      disabled={current}
    >
      
    </button>

  return <div>
   {
     perPage.map((el)=>
     <button
     key={el}
      data-testid="page-btn"
      value={el}
      onClick={(e)=>changePage(e.target.value)}
      disabled={current==el}
    >
      {el}
    </button>
     )
   }
  </div>;
}

export default Pagination;
