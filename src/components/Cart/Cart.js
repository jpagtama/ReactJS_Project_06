import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart = props => {
    const ctx = useContext(CartContext)

    const items = (
        ctx.cart.map((cartItem) => {
            const [mealItem] = props.meals.filter((item) => {return item.id === cartItem.id})

            return (
                <div key={cartItem.id} className={styles.row}>
                    <div className={styles.descBlock}>
                        <h2>{mealItem.title}</h2>
                        <i>{mealItem.desc}</i><br/>
                        <b>${mealItem.price}</b>
                        <b style={{marginLeft:"5px"}}>x{cartItem.quantity}</b>
                    </div>
                    <div className={styles.actionBlock}>
                        <button onClick={() => ctx.onRemoveFromCart(cartItem.id)} >-</button>
                        <button onClick={() => ctx.onAddToCart(cartItem.id,1)} >+</button>
                    </div>
                </div>
            )
        })
    )

    return (
        <Modal >
            <div className={styles.cart}>
                <header><h1>Your Cart</h1></header>
                <div className={styles.content} >
                    {items}
                </div>
                <footer>
                    <button className={styles.cancelBtn} onClick={ctx.onCloseCart} >Cancel</button>
                    <button className={styles.orderBtn} >Order</button>
                </footer>
            </div>
        </Modal>
    )
}
export default Cart