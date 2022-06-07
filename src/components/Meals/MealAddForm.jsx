import { useRef, useContext } from 'react'
import CartContext from '../../store/cart-context'
import Button from '../UI/Button'
import styles from './MealAddForm.module.css'

const MealAddForm = props => {
    const cartContext = useContext(CartContext)
    const amountInputRef = useRef()

    const addToCartHandler = (e) => {
        e.preventDefault()
        cartContext.onAddToCart(props.item.id,+amountInputRef.current.value)
    }

    return (
        <form onSubmit={addToCartHandler} >
            <label htmlFor={`amount_${props.item.id}`} >Amount: </label>
            <input ref={amountInputRef} id={`amount_${props.item.id}`} defaultValue={1} type="number" step="1" min="1" max="10" size="2"/>
            <div className={styles.actionRow}>
                <Button type={"submit"} >+ Add</Button>
            </div>
        </form>
    )
}
export default MealAddForm