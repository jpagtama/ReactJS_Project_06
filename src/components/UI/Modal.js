import { useContext } from 'react'
import styles from './Modal.module.css'
import CartContext from '../../store/cart-context'
import Card from './Card'
import BackDrop from './BackDrop'

const Modal = props => {
    const ctx = useContext(CartContext)
    return (
        <BackDrop>
            <Card className={styles.modal} >
                <h1>Your Cart</h1>
                <button onClick={ctx.onCloseCart}>Close</button>
            </Card>
        </BackDrop>
    )
}
export default Modal