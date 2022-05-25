import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.headerContent} >
                <h1>ReactMeals</h1>
                <div className={styles.cart}>Your Cart</div>
            </div>
        </div>
    )
}
export default Header