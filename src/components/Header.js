import { useContext } from 'react'
import styles from './Header.module.css'
import CartContext from '../store/cart-context'

const Header = () => {
    const ctx = useContext(CartContext)

    return (
        <div className={styles.header}>
            <div className={styles.headerContent} >
                <h1>ReactMeals</h1>
                <div className={styles.cart}>
                    <button >
                        <b className={styles.cartTitle}>Your Cart</b>
                        <div className={styles.count} >{ctx.cartCount}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header