import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.headerContent} >
                <h1>ReactMeals</h1>
                <div className={styles.cart}>
                    <button >
                        <b className={styles.cartTitle}>Your Cart</b>
                        <div className={styles.count} >5</div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header