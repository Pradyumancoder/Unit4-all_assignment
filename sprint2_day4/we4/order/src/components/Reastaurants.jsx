
import styles from "./Reastaurants.module.css"

const OrderButton=()=>{
    return <div className={styles.OrderButton}>order online</div>
    
    
}
const Reastaurants=()=>{
return(
  <div>
    <div className={styles.container}>
    </div>
    <div className={styles.footer}>

        <OrderButton/>
        
    </div>
    </div>
)
}
export default Reastaurants
