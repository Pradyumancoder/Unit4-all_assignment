import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Loader from "../Components/Loader";

function RestaurantPage() {

  const [data,setData] = useState({})
  const {id} = useParams();
  const [ loading , setLoading ]=useState(false)
 

  useEffect(()=>{
    setLoading(true)
    fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      setData(res.data)
      // console.log(res.data)
      setLoading(false)
    })
  },[])


const { image , name , type , rating ,number_of_votes,price_starts_from }=data

  return (
    <>
   { loading?<Loader />:
   
   <div data-testid="restaurant-container">
      <img
        src={image}
        alt={name}
        data-testid="restaurant-image"
        width={"100%"}
      />
      <div>
        <h4 data-testid="restaurant-name">{name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b  data-testid="restaurant-type">{type?.replace('_',' ').replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>}
    </>
  );
}
export default RestaurantPage;