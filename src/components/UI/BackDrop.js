import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import styles from './BackDrop.module.css'

const BackDrop = props => {
    const ctx = useContext(CartContext)
    return (
        <div className={styles.backdrop} onClick={ctx.onCloseCart} >{props.children}</div>
    )
}
export default BackDrop