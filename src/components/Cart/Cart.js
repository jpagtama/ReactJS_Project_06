import React, { useContext, useState, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart = props => {
    const [total, setTotal] = useState(0)
    const ctx = useContext(CartContext)

    useEffect(() => {
        setTotal(
            ctx.cart.reduce((total,item) => {
                const qty = item.quantity
                let [cost] = props.meals.filter(i => i.id === item.id)
                cost = cost.price
                return total + (qty * cost)
            }, 0)
        )
    }, [ctx.cart,props.meals])

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
    const checkOutHandler = () => {
        ctx.onViewOrder()
    }

    return (
        <Modal >
            <div className={styles.cart}>
                <header><h1>Your Cart</h1></header>
                <div className={styles.content} >
                    {items}
                    <div>
                        <h2>Total Amount: ${total}</h2>
                    </div>
                </div>
                <footer>
                    <button className={styles.cancelBtn} onClick={ctx.onCloseCart} >Cancel</button>
                    <button onClick={checkOutHandler} className={styles.orderBtn} >Checkout</button>
                </footer>
            </div>
        </Modal>
    )
}
export default Cart