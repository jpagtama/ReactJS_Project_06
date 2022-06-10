import React, { useContext } from 'react'
import CartContext from '../store/cart-context'
import Card from './UI/Card'
import MealList from './Meals/MealList'
import styles from './Body.module.css'
import PlaceOrder from './Cart/PlaceOrder'

const Body = props => {
    const cartContext = useContext(CartContext)

    if (cartContext.viewOrder) return <div className={styles.body}><PlaceOrder /></div>
    return (
        <div className={styles.body}>
            <Card className={styles.landingDesc}>
                <h3>Delicious Food, Delivered To You</h3>
                <p>Choose your favorite meal from our broad selection of and enjoy a delicious lunch or dinner at home</p>
                <p>All our meals are cooked to order with high quality ingredients and by experienced chefs!</p>
            </Card>
            {props.isLoading? 
                <div style={{width:"100%",textAlign:"center"}}>
                    <h2 style={{marginTop:"10rem",padding:"none",margin:"none"}}>Loading...</h2>
                </div> 
            : 
                <MealList meals={props.meals} />
            }
        </div>
    )
}
export default Body