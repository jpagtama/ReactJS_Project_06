import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import styles from './PlaceOrder.module.css'

const PlaceOrder = () => {
    const cartContext = useContext(CartContext)

    const submitHandler = event => {
        event.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <h1>Place Order</h1>
            <label>First Name</label><span className={styles.errorMessage}>Error message</span>
            <input type="text" />
            <label>Last Name</label><span className={styles.errorMessage}>This is an error</span>
            <input type="text" />
            <label>Street Address</label><span className={styles.errorMessage}>This is an error</span>
            <input type="text" />
            <section className={styles.addressSection}>
                <div style={{width:"50%",float:"left",display:"inline-block"}}>
                    <div className={styles.label} >
                        <label >City</label><span className={styles.errorMessage}>This is an error</span>
                    </div>
                    <input type="text" />
                </div>
                <div style={{width:"10%",float:"left",display:"inline-block",marginLeft:"1rem"}}>
                    <div className={styles.label} >
                        <label>State</label>
                    </div>
                    <input type="text" maxLength="2"/>
                </div>
                <div style={{width:"30%",float:"right",display:"inline-block",marginLeft:"1rem"}} >
                    <div className={styles.label} >
                        <label>Zip</label><span className={styles.errorMessage}>This is an error</span>
                    </div>
                    <input type="number" maxLength="5" min="0" step="1"/>
                </div>
            </section>
            <button type="submit" className={styles.placeOrderBtn} >Place Order</button>
            <button type="button" onClick={cartContext.onCloseOrder} className={styles.cancelBtn} >Cancel</button>
        </form>
    )
}
export default PlaceOrder